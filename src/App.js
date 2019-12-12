import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'components/navBar';
import DashboardConnect from 'components/higherOrderComponents/dashboardConnect';
import { STRING_CONSTANTS } from 'shared/constants/stringConstants';

export class App extends Component {
    render() {
        return (
            <>
                <Navbar title={STRING_CONSTANTS.NAVBAR.TITLE}/>
                <DashboardConnect />
            </>
        );
    }
}

export const mapStateToProps = (state, props) => ({
    ...props,
});

export default connect(mapStateToProps)(App);