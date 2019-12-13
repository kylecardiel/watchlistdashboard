import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Navbar = props => {
    return (
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography variant='h3' color='inherit'>
                        {props.title}
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
};
