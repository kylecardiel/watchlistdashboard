export const SET_DISPLAY_DATA = '[dataSet]SET_DISPLAY_DATA';
export const setDisplayData = data => ({
    type: SET_DISPLAY_DATA,
    payload: data,
});

export const ADD_SYMBOL = '[dataSet]ADD_SYMBOL';
export const addSymbol = symbolData => ({
    type: ADD_SYMBOL,
    payload: symbolData,
});

export const REMOVE_SYMBOL = '[dataSet]REMOVE_SYMBOL';
export const removeSymbol = symbol => ({
    type: REMOVE_SYMBOL,
    payload: symbol,
});

export const UPDATE_SYMBOL = '[dataSet]UPDATE_SYMBOL';
export const updateSymbol = symbol => ({
    type: UPDATE_SYMBOL,
    payload: symbol,
});

export const SET_QUOTE_DETAILS_DATA = '[dataSet]SET_QUOTE_DETAILS_DATA';
export const setQuoteDetailsData = quoteDetails => ({
    type: SET_QUOTE_DETAILS_DATA,
    payload: quoteDetails,
});
