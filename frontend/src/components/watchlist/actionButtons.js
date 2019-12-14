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
    
    return(
        <TableCell>
            <FlexboxContainer>
                <IconButton color="primary"
                    onClick={e => {
                            API.updateWatchlistBySymbol(props.record_id).then(data => {

                                if(data.message){
                                    NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                                } else {
                                    NotificationUtil.display(NOTIFICATION_TYPES.SUCCESS, NOTIFICATION_MESSAGES.SUCCESSFUL_UPDATE);
                                    props.updateSymbol(data);
                                }
                            });
                            e.stopPropagation();
                    }}
                >
                    <RefreshIcon/>
                </IconButton>
                <IconButton color="secondary"
                    onClick={e => {
                        API.deleteWatchlistBySymbol(props.record_id).then(data => {
                            if(isEqual(data.message, NOTIFICATION_MESSAGES.SUCCESSFUL_DELETE)){
                                NotificationUtil.display(NOTIFICATION_TYPES.SUCCESS, data.message);
                                props.removeSymbol(props.recordSymbol);
                            } else {
                                NotificationUtil.display(NOTIFICATION_TYPES.ERROR, data.message);
                            }
                        });
                        e.stopPropagation();
                    }}
                >
                    <DeleteIcon/>
                </IconButton>
            </FlexboxContainer>
        </TableCell>
    );
};