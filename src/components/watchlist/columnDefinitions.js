import { COLUMN_HEADERS } from 'shared/constants/stringConstantsSelectors';

export const WatchlistColumnDefinitions = [

    {
        headerName: COLUMN_HEADERS.SYMBOL,
        field:  'symbol',
    },
    {
        headerName: COLUMN_HEADERS.PRICE_OPEN,
        field:  'price_open',
    },
    {
        headerName: COLUMN_HEADERS.DAY_HIGH,
        field:  'day_high',
    },
    {
        headerName: COLUMN_HEADERS.DAY_LOW,
        field:  'day_low',
    },
    {
        headerName: COLUMN_HEADERS.YESTERDAY_CLOSE,
        field:  'close_yesterday',
    },
    {
        headerName: COLUMN_HEADERS.VOLUME,
        field:  'volume',
    },
    {
        headerName: COLUMN_HEADERS.DELETE,
    },
]
