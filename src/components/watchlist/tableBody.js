import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

export const TableBodys = props => {

    const { data } = props;

    const body = data && data.map((record) => (
        <TableRow key={record.symbol} onClick={e => props.onRowClick(record)}>
            <TableCell component="th" scope="row">{record.symbol}</TableCell>
            <TableCell>{record.price_open}</TableCell>
            <TableCell>{record.day_high}</TableCell>
            <TableCell>{record.day_low}</TableCell>
            <TableCell>{record.close_yesterday}</TableCell>
            <TableCell>{record.volume}</TableCell>
            <TableCell>
                <Button variant="contained" color="secondary" 
                    onClick={e => {
                        props.onRemove(record.symbol);
                        e.stopPropagation();
                    }}
                >
                    x
                </Button>
            </TableCell>
        </TableRow>
    ))

    return (
        <TableBody>{body}</TableBody>
    );
};