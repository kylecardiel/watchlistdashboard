import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    row: {
        backgroundColor: grey[500],
    },
}));

export const TableHeaders = props => {
    
    const classes = useStyles();
    const { columnDefinitions } = props;

    const headerColumn = columnDefinitions.map((record, i) => (
        <TableCell key={i}>{record.headerName}</TableCell>
    ));

    return (
        <TableHead>
            <TableRow className={classes.row}>
                {headerColumn}
            </TableRow>
        </TableHead>
    );
};