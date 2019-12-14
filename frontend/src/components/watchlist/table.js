import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { TableHeaders } from 'components/common/displayData/table/tableHeaders';
import { TableBodys } from 'components/watchlist/tableBody';
import { WatchlistColumnDefinitions } from 'components/watchlist/columnDefinitions';

export const WatchListTable = props => {

    return (
        <Paper>
            <Table>
                <TableHeaders columnDefinitions={WatchlistColumnDefinitions}/>
                <TableBodys 
                    data={props.data} 
                    onRowClick={props.onRowClick} 
                    removeSymbol={props.removeSymbol}
                    updateSymbol={props.updateSymbol}
                /> 
            </Table>
        </Paper>
    );
};