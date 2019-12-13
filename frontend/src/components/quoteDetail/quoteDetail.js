import React from 'react';
import { QUOTE_DETAIL_HEADER } from 'shared/constants/stringConstantsSelectors';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import { QuoteAttribute } from 'components/quoteDetail/quoteAttribute';
import { QuoteDetailStyles } from 'components/quoteDetail/styles/quoteDetailStyles';
import { QuoteAttributeHeaderStyles } from 'components/quoteDetail/styles/quoteAttributeHeaderStyles';
import includes from 'lodash/includes';
import { CancelIconButton } from 'components/common/buttons/icons/cancelIconButton';

const blacklistedProperties = ['_id','__v','name','symbol','timezone_name','gmt_offset'];

export const QuoteDetail = props => {

    const {
        symbol,
        name,
    } = props.record;

    const title =`${symbol}: ${name}`;
    let recordAttributes =[]; 

    let i = 0;
    for (const property in props.record) {
        if(!includes(blacklistedProperties, property)){
            recordAttributes.push( <QuoteAttribute key={i} name={property} value={props.record[property]}/> );
            i++;
        }
    }

    return (
        <QuoteDetailStyles>
            <FlexboxContainer>
                <h3 style={{ padding: '0%' }}>{QUOTE_DETAIL_HEADER}</h3>
                <CancelIconButton onClick={props.onClose}/>
                <QuoteAttributeHeaderStyles backgroundColor='green'>{title}</QuoteAttributeHeaderStyles>
                {recordAttributes}
            </FlexboxContainer>
        </QuoteDetailStyles>
    );
};