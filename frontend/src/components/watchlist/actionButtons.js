import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { API } from 'shared/api/api';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export const ActionButtons = props => {
    
    return(
        <TableCell>
            <FlexboxContainer>
                <IconButton color="primary"
                    onClick={e => {
                            API.updateWatchlistBySymbol(props.record_id).then(() => props.refresh());
                            e.stopPropagation();
                    }}
                >
                    <RefreshIcon/>
                </IconButton>
                <IconButton color="secondary"
                    onClick={e => {
                        API.deleteWatchlistBySymbol(props.record_id).then(() => props.refresh());
                        e.stopPropagation();
                    }}
                >
                    <DeleteIcon/>
                </IconButton>
            </FlexboxContainer>
        </TableCell>
    );
};