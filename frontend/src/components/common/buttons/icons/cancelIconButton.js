import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

export const CancelIconButton = props => {
    return (
        <IconButton onClick={e => props.onClick()}>
            <CancelIcon/>
        </IconButton>
    )
};