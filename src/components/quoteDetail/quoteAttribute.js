import React from 'react';
import Typography from '@material-ui/core/Typography';
import camelCase from 'lodash/camelCase';
import { QuoteAttributeStyles } from 'components/quoteDetail/styles/quoteAttributeStyles';

export const QuoteAttribute = props => {
    return (
        <QuoteAttributeStyles>
            <Typography variant="body2" component="p">
                <b>{`${camelCase(props.name)}: `}</b>
            </Typography>
            <Typography variant="body2" component="p">{`${props.value}`}</Typography>
        </QuoteAttributeStyles>
    );
};