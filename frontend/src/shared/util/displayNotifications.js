import { NOTIFICATION_TYPES } from 'shared/constants/stringConstantsSelectors';
import { toast as notificationCreator } from 'react-toastify';

export class NotificationUtil {
        static display = (type, notificationMessage) => {
        switch (type) {
        case NOTIFICATION_TYPES.INFO:
            notificationCreator.info(notificationMessage);
            break;
        case NOTIFICATION_TYPES.WARNING:
            notificationCreator.warning(notificationMessage);
            break;
        case NOTIFICATION_TYPES.ERROR:
            notificationCreator.error(notificationMessage);
            break;
        case NOTIFICATION_TYPES.SUCCESS:
            notificationCreator.success(notificationMessage);
            break;
        default:
            break;
        }
    };
}