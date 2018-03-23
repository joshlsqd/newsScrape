import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeadlineList from './HeadlineList';

import './App.css';

const App = () => (
    <MuiThemeProvider >
        <HeadlineList />
    </MuiThemeProvider>
);

export {App};
