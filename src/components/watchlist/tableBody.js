import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { BUTTONS } from '../../shared/constants/stringConstantsSelectors';

export const TableBodys = props => {

    const { data } = props;

    const body = data && data.map(record => {
        const currencySymbol = record.currency === 'USD' ? '$' : '';
        return <TableRow key={record.symbol} onClick={e => props.onRowClick(record)}>
                <TableCell component="th" scope="row">{record.symbol}</TableCell>
                <TableCell>{`${currencySymbol}${record.price_open}`}</TableCell>
                <TableCell>{`${currencySymbol}${record.day_high}`}</TableCell>
                <TableCell>{`${currencySymbol}${record.day_low}`}</TableCell>
                <TableCell>{`${currencySymbol}${record.close_yesterday}`}</TableCell>
                <TableCell>{record.volume}</TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" 
                        onClick={e => {
                            props.onRemove(record.symbol);
                            e.stopPropagation();
                        }}
                    >
                        {BUTTONS.DELETE}
                    </Button>
                </TableCell>
            </TableRow>
    }
    )

    return (
        <TableBody>{body}</TableBody>
    );
};