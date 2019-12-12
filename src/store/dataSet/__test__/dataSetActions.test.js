import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as dataSetActions from 'store/dataSet/dataSetActions';
import { initialState } from 'store/initialState';

describe('Data Set Actions', () => {
    const middleWare = [thunk];
    const mockStore = configureMockStore(middleWare);
    let actions, store;

    beforeEach(() => {
        actions = [];
    });

    afterEach(() => {
        store.clearActions();
    });

    describe('action: setDisplayData', () => {
        it('should create an action to set display data', () => {
            const displayData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            store = mockStore(initialState);
            store.dispatch(dataSetActions.setDisplayData(displayData));
            actions = store.getActions();

            expect(actions).toHaveLength(1);
            expect(actions[0].type).toBe(dataSetActions.SET_DISPLAY_DATA);
            expect(actions[0].payload).toBe(displayData);
        });
    });

    describe('action: removeSymbol', () => {
        it('should create an action to remove symbol', () => {
            const symbol = 'name1';
            store = mockStore(initialState);
            store.dispatch(dataSetActions.removeSymbol(symbol));
            actions = store.getActions();

            expect(actions).toHaveLength(1);
            expect(actions[0].type).toBe(dataSetActions.REMOVE_SYMBOL);
            expect(actions[0].payload).toBe(symbol);
        });
    });

    describe('action: addSymbol', () => {
        it('should create an action to add symbol', () => {
            const symbolData = { symbol: 'name1' };
            store = mockStore(initialState);
            store.dispatch(dataSetActions.addSymbol(symbolData));
            actions = store.getActions();

            expect(actions).toHaveLength(1);
            expect(actions[0].type).toBe(dataSetActions.ADD_SYMBOL);
            expect(actions[0].payload).toBe(symbolData);
        });
    });

    describe('action: setQuoteDetailsData', () => {
        it('should create an action to set quote details data', () => {
            const quoteDetails = { symbol: 'name1' };
            store = mockStore(initialState);
            store.dispatch(dataSetActions.setQuoteDetailsData(quoteDetails));
            actions = store.getActions();

            expect(actions).toHaveLength(1);
            expect(actions[0].type).toBe(dataSetActions.SET_QUOTE_DETAILS_DATA);
            expect(actions[0].payload).toBe(quoteDetails);
        });
    });

    describe('action: closeDetailsAndRemoveFromWatchlist', () => {
        it('should create 2 actions', () => {
            const displayData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            const quoteDetails = { symbol: 'name1' };
            initialState.dataSet.displayData = displayData;
            initialState.dataSet.quoteDetails = quoteDetails;
            store = mockStore(initialState);
            store.dispatch(dataSetActions.closeDetailsAndRemoveFromWatchlist('name1'));
            actions = store.getActions();

            expect(actions).toHaveLength(2);
            expect(actions[0].type).toBe(dataSetActions.REMOVE_SYMBOL);
            expect(actions[1].type).toBe(dataSetActions.SET_QUOTE_DETAILS_DATA);
        });
    });
});
