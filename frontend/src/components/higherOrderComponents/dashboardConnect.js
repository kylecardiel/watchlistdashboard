/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dashboard } from 'components/dashboard';
import { getDisplayedData, getQuoteDetails } from 'store/dataSet/dataSetSelector';
import { setDisplayData, setQuoteDetailsData, addSymbol, removeSymbol, updateSymbol } from 'store/dataSet/dataSetActions';

export class DashboardConnect extends Component {
    render() {
        return ( <Dashboard /> );
    }
}

export const mapStateToProps = state => ({
    displayedData: getDisplayedData(state),
    quoteDetails: getQuoteDetails(state),
});

export const mapDispatchToProps = dispatch => ({
    setDisplayData: data => { 
        dispatch(setDisplayData(data));
    },
    setQuoteDetails: quoteDetails => { 
        dispatch(setQuoteDetailsData(quoteDetails));
    },
    addSymbol: symbolData => {
        dispatch(addSymbol(symbolData));
    },
    removeSymbol: symbolData => {
        dispatch(removeSymbol(symbolData));
    },
    updateSymbol: symbolData => {
        dispatch(updateSymbol(symbolData));
    }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);