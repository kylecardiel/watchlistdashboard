import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { API } from 'shared/api/api';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { NOTIFICATION_TYPES, NOTIFICATION_MESSAGES } from 'shared/constants/stringConstantsSelectors';
import { NotificationUtil } from 'shared/util/displayNotifications';
import isEqual from 'lodash/isEqual';

export const ActionButtons = props => {
    
    const onDeleteClick = e => {
        API.deleteWatchlistBySymbol(props.record_id)
            .then(data => {
                if(isEqual(data.message, NOTIFICATION_MESSAGES.SUCCESSFUL_DELETE)){
                    NotificationUtil.display(NOTIFICATION_TYPES.SUCCESS, data.message);
                    props.removeSymbol(props.recordSymbol);
                } else {
                    NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                }
            });
        e.stopPropagation();
    }

    const onUpdateClick = e => {
        API.updateWatchlistBySymbol(props.record_id)
            .then(data => {
                if(data.message){
                    NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                } else {
                    NotificationUtil.display(NOTIFICATION_TYPES.SUCCESS, NOTIFICATION_MESSAGES.SUCCESSFUL_UPDATE(props.recordSymbol));
                    props.updateSymbol(data);
                }
            });
        e.stopPropagation();
    }

    return(
        <TableCell>
            <FlexboxContainer>
                <IconButton color="primary" onClick={e => onUpdateClick(e)} >
                    <RefreshIcon/>
                </IconButton>
                <IconButton color="secondary" onClick={e => onDeleteClick(e)}>
                    <DeleteIcon/>
                </IconButton>
            </FlexboxContainer>
        </TableCell>
    );
};