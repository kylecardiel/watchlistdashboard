import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BUTTONS } from 'shared/constants/stringConstantsSelectors';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export const AddNewSymbol = props => {

    const [text, setText] = useState();
    const handleTextChange = event => { setText(event.target.value); };

    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="on">
            <TextField
                id="filled-full-width"
                label={props.inputLabel}
                style={{ margin: 8 }}
                placeholder="Add New Symbol"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                onChange={handleTextChange}
            />
            <Button variant="contained" color="primary" onClick={e => props.onSubmit(text)}>{BUTTONS.SUMBIT}</Button>
        </form>
    );
}