import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as apiCalls from './api';

const scrapeHeadlines = async () => {
    await apiCalls.scrapeHeadlines()};

const Appbar = () => (

    <AppBar
        title="New Scrape"
        iconElementRight={<FlatButton label="Scrape" onClick={scrapeHeadlines}/>}
        showMenuIconButton={false}
    />
);

export default Appbar;