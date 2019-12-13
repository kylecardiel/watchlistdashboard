import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'components/navBar';
import DashboardConnect from 'components/higherOrderComponents/dashboardConnect';
import { STRING_CONSTANTS } from 'shared/constants/stringConstants';
import { ToastContainer as NotificationContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
    render() {
        return (
            <>
                <NotificationContainer />
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