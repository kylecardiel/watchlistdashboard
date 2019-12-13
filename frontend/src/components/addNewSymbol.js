import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BUTTONS } from 'shared/constants/stringConstantsSelectors';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    button: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350,
        height: 50,
        backgroundColor: green[700],
        '&:hover': {
          backgroundColor: green[900],
        },
        color: 'white'
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
            <Button
                variant="contained"
                startIcon={<PlaylistAddIcon />}
                className={classes.button}
                onClick={e => props.onSubmit(text)}
            >
                {BUTTONS.ADD_TO_LIST}
            </Button>
            
        </form>
    );
};