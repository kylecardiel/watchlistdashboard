import React, { Component } from 'react';
import { API } from 'shared/api/api';
import { WatchListTable } from 'components/watchlist/table';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteDetail } from 'components/quoteDetail/quoteDetail';
import { WATCHLIST_TABLE_NAME } from 'shared/constants/stringConstantsSelectors';
import Typography from '@material-ui/core/Typography';
import { AddNewSymbol } from 'components/addNewSymbol';

export class Dashboard extends Component {

    componentDidMount() {
        // const defualtSymbols = ['SPY','DJI','RUS','NDX','TSLA'];
        this.data();
    }

    data = () => {
        API.getAllWatchlistSymbols()
            .then((data) => {
                this.props.setDisplayData(data);
            });
    }

    addNewSymbol = symbol => {
        API.createNewWatchlistSymbol(symbol)
            .then(() => this.data());
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
        } = this.props;

        const quoteDetailCardDisplay = quoteDetails && 
                <div style={{ width: '60%', margin: '1%' }}>
                    <QuoteDetail record={quoteDetails} onClose={setQuoteDetails} />
                </div>;

        return (
            <FlexboxContainer>
                {quoteDetailCardDisplay}
                <div style={{ width: '80%', margin: '1%' }}>
                    <Typography variant="h5" component="h2">{WATCHLIST_TABLE_NAME}</Typography>
                    <WatchListTable data={displayedData} onRowClick={setQuoteDetails} refresh={this.data}/>
                </div>
                <div style={{ width: '40%', margin: '1%' }}>
                    <AddNewSymbol onSubmit={this.addNewSymbol}/>
                </div>
            </FlexboxContainer>
    
        );
    }
}