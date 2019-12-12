import React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { tableStyles } from 'components/common/displayData/table/tableStyles';
import { TableHeaders } from 'components/common/displayData/table/tableHeaders';
import { TableBodys } from 'components/watchlist/tableBody';
import { WatchlistColumnDefinitions } from 'components/watchlist/columnDefinitions';

export const WatchListTable = props => {
    
    const classes = tableStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHeaders columnDefinitions={WatchlistColumnDefinitions}/>
                <TableBodys data={props.data}n onRowClick={props.onRowClick} onRemove={props.onRemove}/> 
            </Table>
        </Paper>
    );
};