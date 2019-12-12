import React, { Component } from 'react';
import { API } from 'shared/api/api';
import { WatchListTable } from 'components/watchlist/table';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteDetail } from 'components/quoteDetail/quoteDetail';
import { WATCHLIST_TABLE_NAME, BUTTONS } from 'shared/constants/stringConstantsSelectors';
import Typography from '@material-ui/core/Typography';
import { AddNewSymbol } from 'components/addNewSymbol';
import Button from '@material-ui/core/Button';

export class Dashboard extends Component {

    static defualtSymbols = ['SPY','DJI','RUS','NDX','TSLA'];

    componentDidMount() {
        this.data(this.defualtSymbols);
    }

    data = symbolList => {
        API.handleDataRequestsAPI(symbolList)
            .then((data) => {
                this.props.setDisplayData(data);
            });
    }

    addNewSymbol = symbol => {
        API.getNewSymbol(symbol)
            .then((data) => {
                this.props.addSymbol(data);
        });
    }

    updateWatchlistData = () => {
        let symbolList = [];
        this.props.displayedData.map(record => 
            symbolList.push(record.symbol)
        );
        this.data(symbolList);
    }

    render() {

        const {
            displayedData,
            quoteDetails,
            setQuoteDetails,
            closeDetailsAndRemoveFromWatchlist,
        } = this.props;

        const quoteDetailCardDisplay = quoteDetails && 
                <div style={{width: '60%', margin: '1%'}}>
                    <QuoteDetail record={quoteDetails} onClose={setQuoteDetails} onRemove={closeDetailsAndRemoveFromWatchlist} />
                </div>

        return (
            <FlexboxContainer>
                {quoteDetailCardDisplay}
                <div style={{width: '80%', margin: '1%'}}>
                    <div style={{float: 'right', marginBottom: '5px'}}>
                        <Button variant="contained" onClick={e => this.updateWatchlistData()}>{BUTTONS.UPDATE}</Button>
                    </div>
                    <Typography variant="h5" component="h2">{WATCHLIST_TABLE_NAME}</Typography>
                    <WatchListTable data={displayedData} onRowClick={setQuoteDetails} onRemove={closeDetailsAndRemoveFromWatchlist}/>
                </div>
                <div style={{width: '40%', margin: '1%'}}>
                    <AddNewSymbol onSubmit={this.addNewSymbol}/>
                </div>
            </FlexboxContainer>
    
        );
    }
}