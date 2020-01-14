import React, { useState, useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
// import './index.sass'

// COMPOS

import HomePage from '../Home-page'
import Header from '../Header'

export default withRouter(function ({ history }) { 
    
// MAIN

    function handleGoToHomePage() { history.push('/home-page') } 

// 

    return ( 
        <>
            <Route exact path="/" render={() => <HomePage /> }/> 
            <Header onHomePage={handleGoToHomePage} />
        </>

    )

})