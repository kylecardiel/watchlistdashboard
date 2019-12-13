import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ActionButtons } from 'components/watchlist/actionButtons';
import { NumberUtils } from '../../shared/util.js/numberUtils';

export const TableBodys = props => {

    const { data } = props;

    const rows = data && data.map(record => {
        const currencySymbol = record.currency === 'USD' ? '$' : '';
        const formatedVolume = NumberUtils.formatWithCommas(record.volume);
        return <TableRow key={record.symbol} onClick={e => props.onRowClick(record)}>
            <TableCell component="th" scope="row">{record.symbol}</TableCell>
            <TableCell>{`${currencySymbol}${record.price_open}`}</TableCell>
            <TableCell>{`${currencySymbol}${record.day_high}`}</TableCell>
            <TableCell>{`${currencySymbol}${record.day_low}`}</TableCell>
            <TableCell>{`${currencySymbol}${record.close_yesterday}`}</TableCell>
            <TableCell>{formatedVolume}</TableCell>
            <ActionButtons refresh={props.refresh} record_id={record._id}/>
        </TableRow>;
    });

    return (
        <TableBody>{rows}</TableBody>
    );
};