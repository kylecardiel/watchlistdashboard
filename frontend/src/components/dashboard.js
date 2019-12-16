import React, { Component } from 'react';
import { API } from 'shared/api/api';
import { WatchListTable } from 'components/watchlist/table';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteDetail } from 'components/quoteDetail/quoteDetail';
import { WATCHLIST_TABLE_NAME, BUTTONS } from 'shared/constants/stringConstantsSelectors';
import Typography from '@material-ui/core/Typography';
import { AddNewSymbol } from 'components/addNewSymbol';
import { NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from 'shared/constants/stringConstantsSelectors';
import { NotificationUtil } from 'shared/util/displayNotifications';
import sortBy from 'lodash/sortBy';
import { defaultSymbolList } from 'shared/constants/default';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

export class Dashboard extends Component {

    componentDidMount() {
        this.getWatchlistSymbols();
    }

    getWatchlistSymbols = () => {
        API.getAllWatchlistSymbols()
            .then(data => {
                if(data.message){
                    NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                } else {
                    if(data.length === 0){
                        this.getDefaultSymbolLost();
                    } else {
                        this.props.setDisplayData(this.sortWatchlistBySymbolAlphabetically(data));
                    }
                }
            });
    }

    getDefaultSymbolLost = () => {
        defaultSymbolList.forEach(symbol => {
            this.addNewSymbol(symbol)
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

    quoteDetailCardDisplay = () => {
        const {
            quoteDetails,
            setQuoteDetails,
        } = this.props;

        return quoteDetails && 
        <div style={{ width: '60%', margin: '1%' }}>
            <QuoteDetail record={quoteDetails} onClose={setQuoteDetails} />
        </div>;
    }

    getDefaultSymbolButton = () => {
        const {
            displayedData,
        } = this.props;

        return displayedData.length === 0 && 
        <div style={{ width: '30%', margin: '1%' }}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<PlaylistAddIcon />}
                onClick={e => this.getDefaultSymbolLost()}
            >
            {BUTTONS.ADD_DEFAULT_SYMBOLS}
            </Button>
            <Typography variant="body2" component="p">{`*Default List: ${defaultSymbolList.toString()}`}</Typography>
        </div>;
    }

    render() {

        const {
            displayedData,
            removeSymbol,
            updateSymbol,
        } = this.props;

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
                {this.getDefaultSymbolButton()}
                {this.quoteDetailCardDisplay()}
            </FlexboxContainer>
    
        );
    }
}