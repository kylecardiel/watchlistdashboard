import { dashboardSymbolRestApi } from 'config';
import sortBy from 'lodash/sortBy';

const axios = require('axios');

export class API {
    static getAllWatchlistSymbols = () => {
        return axios.get(dashboardSymbolRestApi).then(response => response.data && sortBy(response.data, [ s => s.symbol ]));
    }

    static getSpecificSymbol = symbolId => {
        const getURL = `${dashboardSymbolRestApi}/${symbolId}`;
        return axios.get(getURL).then(response => response.data);
    }

    static createNewWatchlistSymbol = symbol => {
        return axios.post(dashboardSymbolRestApi, { symbol }).then(data => data.data);
    }

    static deleteWatchlistBySymbol = symbolId => {
        const deleteURL = `${dashboardSymbolRestApi}/${symbolId}`;
        return axios.delete(deleteURL).then(data => data.data);
    }

    static updateWatchlistBySymbol = symbolId => {
        const updateURL = `${dashboardSymbolRestApi}/${symbolId}`;
        return axios.patch(updateURL);
    }
}