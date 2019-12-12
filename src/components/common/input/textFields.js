import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="on">
            <TextField
                id="filled-full-width"
                label={props.inputLabel}
                style={{ margin: 8 }}
                placeholder="New Symbol"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                // onChange={props.handleChange}
            />
            <Button variant="contained" color="primary">Submit</Button>
        </form>
    );
}