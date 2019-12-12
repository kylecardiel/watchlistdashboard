const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let symbolSchema = new Schema({
    name: { type: String },
    symbol: { type: String },
    currency: { type: String },
    price: { type: String },
    price_open: { type: String },
    day_high: { type: String },
    day_low: { type: String },
    '52_week_high' : { type: String },
    '52_week_low': { type: String },
    day_change: { type: String },
    change_pct: { type: String },
    close_yesterday: { type: String },
    market_cap: { type: String },
    volume: { type: String },
    volume_avg: { type: String },
    shares: { type: String },
    stock_exchange_long: { type: String },
    stock_exchange_short: { type: String },
    timezone: { type: String },
    timezone_name: { type: String },
    gmt_offset: { type: String },
    last_trade_time: { type: String },
    pe: { type: String },
    eps: { type: String },
  });

module.exports = mongoose.model('Symbols', symbolSchema)


