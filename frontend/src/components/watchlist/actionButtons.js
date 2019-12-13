import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { BUTTONS } from '../../shared/constants/stringConstantsSelectors';
import { API } from 'shared/api/api';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';

export const ActionButtons = props => {
    return(
        <TableCell>
            <FlexboxContainer>
                <Button variant="contained"
                    onClick={e => {
                        API.updateWatchlistBySymbol(props.record_id).then(() => props.refresh());
                        e.stopPropagation();
                    }}
                >
                    {BUTTONS.UPDATE}
                </Button>
                <Button variant="contained" color="secondary" 
                    onClick={e => {
                        API.deleteWatchlistBySymbol(props.record_id).then(() => props.refresh());
                        e.stopPropagation();
                    }}
                >
                    {BUTTONS.DELETE}
                </Button>
            </FlexboxContainer>
        </TableCell>
    );
};