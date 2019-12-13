import { dashboardRestApi } from 'config';
import sortBy from 'lodash/sortBy';

const axios = require('axios');

export class API {
    static getAllWatchlistSymbols = () => {
        return axios.get(dashboardRestApi).then(response => response.data && sortBy(response.data, [ s => s.symbol ]));
    }

    static createNewWatchlistSymbol = symbol => {
        return axios.post(dashboardRestApi, { symbol });
    }

    static deleteWatchlistBySymbol = symbolId => {
        const deleteURL = `${dashboardRestApi}/${symbolId}`;
        return axios.delete(deleteURL);
    }

    static updateWatchlistBySymbol = symbolId => {
        const updateURL = `${dashboardRestApi}/${symbolId}`;
        return axios.patch(updateURL);
    }
}