import { dataSet } from 'store/dataSet/dataSetReducer';
import { initialState } from 'store/initialState';
import * as actionTypes from 'store/dataSet/dataSetActions';

describe('Dataset Reducer', () => {

    let action;
    beforeEach(() => {
        action = null;
    });
    

    describe('for action type SET_DISPLAY_DATA', () => {
        it('should update display data given an array', () => {
            const displayedData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            action = {
                type: actionTypes.SET_DISPLAY_DATA,
                payload: displayedData,
            };
            const newState = dataSet(initialState.dataSet, action);
            expect(newState.displayedData).toBe(displayedData);
        });
    });

    describe('for action type REMOVE_SYMBOL', () => {
        it('should remove symbol and respective data from display data', () => {
            initialState.dataSet.displayedData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            const symbol = 'name1';
            action = {
                type: actionTypes.REMOVE_SYMBOL,
                payload: symbol,
            };
            const newState = dataSet(initialState.dataSet, action);
            expect(newState.displayedData).toStrictEqual([{ symbol: 'name2' }]);
        });

        it('should not remove symbol and respective data from display data if does not exist', () => {
            initialState.dataSet.displayedData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            const symbol = 'name3';
            action = {
                type: actionTypes.REMOVE_SYMBOL,
                payload: symbol,
            };
            const newState = dataSet(initialState.dataSet, action);
            expect(newState).toStrictEqual(initialState.dataSet);
        });
    });

    describe('for action type ADD_SYMBOL', () => {
        it('should add symbol and respective data to display data', () => {
            initialState.dataSet.displayedData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            const symbolData = { symbol: 'name3' };
            action = {
                type: actionTypes.ADD_SYMBOL,
                payload: symbolData,
            };
            const newState = dataSet(initialState.dataSet, action);
            expect(newState.displayedData).toStrictEqual([{ symbol: 'name1' }, { symbol: 'name2' }, { symbol: 'name3' }]);
        });
    });

    describe('for action type SET_QUOTE_DETAILS_DATA', () => {
        it('should update quote detail data', () => {
            const quoteDetails = { symbol: 'name1' };
            action = {
                type: actionTypes.SET_QUOTE_DETAILS_DATA,
                payload: quoteDetails,
            };
            const newState = dataSet(initialState, action);
            expect(newState.quoteDetail).toBe(quoteDetails);
        });

    });


});
