import * as actions from 'store/dataSet/dataSetActions';
import cloneDeep from 'lodash/cloneDeep';
import { initialState } from 'store/initialState';

export const dataSet = (state = initialState.dataSet, action) => {
    switch (action.type) {
    case actions.SET_DISPLAY_DATA: {
        const cloneState = cloneDeep(state);
        cloneState['displayedData'] = action.payload;
        return cloneState;
    }
    case actions.REMOVE_SYMBOL: {
        let cloneState = cloneDeep(state);
        cloneState.displayedData = cloneState.displayedData.filter(function (element) {
            return element['symbol'] !== action.payload;
        });
        return cloneState;
    }
    case actions.ADD_SYMBOL: {

        const cloneState = cloneDeep(state);
        cloneState.displayedData.push(action.payload)
        return cloneState;
    }
    case actions.SET_QUOTE_DETAILS_DATA: {
        const cloneState = cloneDeep(state);
        cloneState.quoteDetail = action.payload;
        return cloneState;
    }
    default:
        return state;
    }
};