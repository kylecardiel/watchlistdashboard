import { mockData } from 'shared/api/mockData';

const axios = require('axios');
const apiToken = 'UcY7RIsoOUblEZ5NGJ97TS0qjRMdJfE0IyuytK4UtAyRAeGUJkCA127E6wcB';
const baseURL = 'https://api.worldtradingdata.com/api/v1/stock';

export class API {

    makeRealAPICalls = false;

    static handleDataRequestsAPI = request => {

        if(this.makeRealAPICalls){
            const requestList = ['SPY','DJI','RUS','NDX','TSLA'].join(',');
            let finalRequest = `${baseURL}?symbol=${requestList}&api_token=${apiToken}`
            return axios.get(finalRequest).then(response => response.data.data);
        } else {
            let promise = new Promise((resolve, reject) => {
                const data = mockData;
                data && resolve(data);
                reject('Never going to fail, calling a local js file...');
            });
                   
            return promise.then(data => {
                return data;
            });
        }
    }

    static getNewSymbol = symbol => {
        if(this.makeRealAPICalls){
            let finalRequest = `${baseURL}?symbol=${symbol}&api_token=${apiToken}`
            return axios.get(finalRequest).then(response => response.data.data);
        } else {
            let promise = new Promise((resolve, reject) => {
                const data =     {
                    'symbol': symbol,
                    'price_open': '000',
                    'day_high': '000',
                    'day_low': '000',
                    'close_yesterday': '000',
                    'volume': '000',
                };
                data && resolve(data);
                reject('Never going to fail, calling a local js file...');
            });
                   
            return promise.then(data => {
                return data;
            });
        }
    }

}