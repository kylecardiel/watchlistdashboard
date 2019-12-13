require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
const symbolsSchema = require('../models/symbols');

router.get('/symbol/', async (request, response, next) => {
    try {
        const symbols = await symbolsSchema.find();
        const subsetSymbols = symbols.map(symbol => 
            (({ _id, name, symbol, price_open, day_high, day_low, close_yesterday, volume, currency }) => (
                { _id, name, symbol, price_open, day_high,  day_low, close_yesterday, volume, currency  }
            ))(symbol));
        response.json(subsetSymbols);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
    next();
});

router.get('/symbol/:id', getSymbol, (request, response) => {
    response.json(response.symbol);
});

router.post('/symbol/', async (request, response) => {
    
    const allSymbols = await symbolsSchema.find();
    let symbolAlreadyExists = false;
    allSymbols.map(record => {
        if(record.symbol === request.body.symbol){
            symbolAlreadyExists = true;
        }
    });

    if(!symbolAlreadyExists){
        getMarketData(request.body.symbol)
        .then(
            async data => {
                const symbol = new symbolsSchema(data);
                try {
                    const newSymbol = await symbol.save();
                    response.status(201).json(newSymbol);
                } catch (error) {
                    response.status(400).json({ message: error.message });
                }
        });
    } else {
        response.json({ message: 'Symbols already exists in watchlist' });
    }
});

router.patch('/symbol/:id', getSymbol, async (request, response) => {
    getMarketData(response.symbol.symbol)
        .then(
            async data => {
                Object.assign(response.symbol, data)
                try {
                    const updateSymbol = await response.symbol.save();
                    response.json(updateSymbol);
                } catch (error) {
                    response.status(400).json({ message: error.message });
                }
            });
});

router.delete('/symbol/:id', getSymbol, async (request, response) => {
    try {
        await response.symbol.remove();
        response.json({ message: 'Symbol deleted successfully' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
  
});

async function getSymbol(request, response, next) {
    let symbol;
    try {
        symbol = await symbolsSchema.findById(request.params.id);
        if(symbol == null){
            return response.status(404).json({ message: 'Cannot find symbol' });
        }
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }

    response.symbol = symbol;
    next();
}

const getMarketData = symbols => {
    const isSymbolList = Array.isArray(symbols);
    let finalRequest = `${process.env.MARKET_DATA_BASE_URL}?symbol=${symbols}&api_token=${process.env.MARKET_DATA_TOKEN}`;
    return axios.get(finalRequest).then(response => isSymbolList ? response.data.data : response.data.data[0]);
};

module.exports = router;