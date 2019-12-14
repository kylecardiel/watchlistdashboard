import { combineReducers } from 'redux'; 
import { dataSet } from 'store/dataSet/dataSetReducer';

export const appReducer = combineReducers({
    dataSet,
});