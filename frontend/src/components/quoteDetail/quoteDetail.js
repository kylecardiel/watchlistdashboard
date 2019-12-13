import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { QUOTE_DETAIL_HEADER, QUOTE_DETAIL_BUTTONS } from 'shared/constants/stringConstantsSelectors';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteAttribute } from 'components/quoteDetail/quoteAttribute';
import { QuoteDetailStyles } from 'components/quoteDetail/styles/quoteDetailStyles';
import { QuoteAttributeHeaderStyles } from 'components/quoteDetail/styles/quoteAttributeHeaderStyles';
import isEqual from 'lodash/isEqual';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const QuoteDetail = props => {
    const classes = useStyles();

    const {
        symbol,
        name,
    } = props.record;

    let recordAttributes =[]; 

    let i = 0;
    for (const property in props.record) {
        if(!isEqual(property, '_id') && !isEqual(property, '__v')){
            recordAttributes.push( <QuoteAttribute key={i} name={property} value={props.record[property]}/> );
            i++;
        }
    }

    return (
        <QuoteDetailStyles>
            <FlexboxContainer>
                <h3 style={{ padding: '0%' }}>{QUOTE_DETAIL_HEADER}</h3>
                <Button variant="contained"  className={classes.button} onClick={e => props.onClose()}>
                    {QUOTE_DETAIL_BUTTONS.CLOSE}
                </Button>
                <QuoteAttributeHeaderStyles backgroundColor='green'>{name}</QuoteAttributeHeaderStyles>
                <QuoteAttributeHeaderStyles backgroundColor='blue'>{symbol}</QuoteAttributeHeaderStyles>
                {recordAttributes}
            </FlexboxContainer>
        </QuoteDetailStyles>
    );
};