import React, { Component } from 'react';
import { API } from 'shared/api/api';
import { WatchListTable } from 'components/watchlist/table';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteDetail } from 'components/quoteDetail/quoteDetail';
import { WATCHLIST_TABLE_NAME } from 'shared/constants/stringConstantsSelectors';
import Typography from '@material-ui/core/Typography';
import { AddNewSymbol } from 'components/addNewSymbol';
import { NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from 'shared/constants/stringConstantsSelectors';
import { NotificationUtil } from 'shared/util/displayNotifications';
import sortBy from 'lodash/sortBy';

export class Dashboard extends Component {

    componentDidMount() {
        // const defualtSymbols = ['SPY','DJI','RUS','NDX','TSLA'];
        this.getWatchlistSymbols();
    }

    getWatchlistSymbols = () => {
        API.getAllWatchlistSymbols()
            .then(data => {
                data.message 
                    ? NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message) 
                    : this.props.setDisplayData(this.sortWatchlistBySymbolAlphabetically(data));
            });
    }

    sortWatchlistBySymbolAlphabetically = symbols => {
        return sortBy(symbols, [ s => s.symbol ])
    }

    addNewSymbol = symbol => {
        API.createNewWatchlistSymbol(symbol)
            .then(data => {
                if(data.message){
                    NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                } else {
                    this.props.addSymbol(data);
                    NotificationUtil.display(NOTIFICATION_TYPES.SUCCESS, NOTIFICATION_MESSAGES.SUCCESSFUL_ADD);
                }
            });
    }

    getQuoteDetails = symbolId => {
        API.getSpecificSymbol(symbolId)
            .then(data => {
                data.message 
                    ? NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message) 
                    : this.props.setQuoteDetails(data);
            });
    }

    updateWatchlistData = () => {
        let symbolList = [];
        this.props.displayedData.map(record => 
            symbolList.push(record.symbol)
        );
        this.getWatchlistSymbols(symbolList);
    }

    render() {

        const {
            displayedData,
            quoteDetails,
            setQuoteDetails,
            removeSymbol,
            updateSymbol,
        } = this.props;

        const quoteDetailCardDisplay = quoteDetails && 
                <div style={{ width: '60%', margin: '1%' }}>
                    <QuoteDetail record={quoteDetails} onClose={setQuoteDetails} />
                </div>;

        return (
            <FlexboxContainer>
                <div style={{ width: '10%', marginTop: '2%' }}>
                    <Typography variant="h5" component="h2">{WATCHLIST_TABLE_NAME}</Typography>
                </div>
                <div style={{ width: '40%'}}>
                    <AddNewSymbol onSubmit={this.addNewSymbol}/>
                </div>
                <div style={{ width: '80%', margin: '1%' }}>
                    <WatchListTable data={displayedData} onRowClick={this.getQuoteDetails} removeSymbol={removeSymbol} updateSymbol={updateSymbol}/>
                </div>
                {quoteDetailCardDisplay}
            </FlexboxContainer>
    
        );
    }
}