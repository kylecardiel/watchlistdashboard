import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { QUOTE_DETAIL_HEADER, QUOTE_DETAIL_BUTTONS } from 'shared/constants/stringConstantsSelectors';
import { FlexboxContainer } from 'shared/styles/flexboxContainer';
import camelCase from 'lodash/camelCase';

export const QuoteDetail = props => {
    const classes = useStyles();

    const {
        symbol,
        name,
    } = props.record;

    let recordAttributes =[]; 

    let i = 0;
    for (const property in props.record) {
        recordAttributes.push(
            <div style={{width: '50%'}}>
                <Typography key={i} variant="body2" component="p">{ `${camelCase(property)}: ${props.record[property]}` }</Typography>
            </div>
        );
        i++;
    };

    return (
        <div style={{padding: '1%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '25px' }}>
            <FlexboxContainer>
                <h3 style={{padding: '0%'}}>{QUOTE_DETAIL_HEADER}</h3>
                <Button variant="contained"  className={classes.button} onClick={e => props.onClose()}>
                    {QUOTE_DETAIL_BUTTONS.CLOSE}
                </Button>
                <div style={{width: '100%', backgroundColor: 'green', color: 'white', padding: '1%', fontWeight: 'bold'}}>{name}</div>
                <div style={{width: '100%', backgroundColor: 'blue', color: 'white', margin: '1%', padding: '1%', fontWeight: 'bold'}}>{symbol}</div>
                {recordAttributes}
                <Button variant="contained" color="secondary" className={classes.button} onClick={e => props.onRemove(symbol)}>
                    {QUOTE_DETAIL_BUTTONS.REMOVE}
                </Button>
            </FlexboxContainer>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));