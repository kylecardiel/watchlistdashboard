import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const TableHeaders = props => {
    
    const { columnDefinitions } = props;

    const headerColumn = columnDefinitions.map((record, i) => (
        <TableCell key={i}>{record.headerName}</TableCell>
    ));

    return (
        <TableHead>
            <TableRow style={{ backgroundColor:'#d3d3d3' }}>
                {headerColumn}
            </TableRow>
        </TableHead>
    );
};