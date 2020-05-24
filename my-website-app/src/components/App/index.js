import React, { useState, useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './index.sass'

// COMPOS

import Header from '../Header'
import HomePage from '../Home-page'
import AboutMe from '../About-me'
import Contact from '../Contact'
import Projects from '../Projects'
import ProjectsContainer from '../Projects-container'
import Time2Padel from '../Time2Padel'
import SkyBeer from '../SkyBeer'
import PersonalWebsite from '../Personal-website'
import GnomesReact from '../Gnomes-react'
import GnomesRedux from '../Gnomes-redux'
import AdevintaVanilla from '../Adevinta-vanilla'
import MusicLetters from '../Music-letters'
import GamesStore from '../Games-store';
import ExpensesTracker from '../Expenses-tracker';



export default withRouter(function ({ history }) { 
    
// HEADER

    function handleGoToHomePage() { history.push('/home-page') } 

    function handleGoToAboutMe() { history.push('/about-me')}

    function handleGoToProjects() { history.push('/projects-container')}

    function handleGoToContact() { history.push('/contact')}

// PROJECTS

    function handleGoToTime2Padel() { history.push('/time2padel')}

    function handleGoToSkyBeer() { history.push('/skybeer')}

    function handleGoToPersonalWebsite() { history.push('/personal-website')}

    function handleGoToGnomesReact() { history.push('/gnomes-react')}

    function handleGoToGnomesRedux() { history.push('/gnomes-redux')}

    function handleGoToAdevintaVanilla() { history.push('/adevinta-vanilla')}

    function handleGoToMusicLetters() { history.push('/music-letters')}

    function handleGoToGamesStore() { history.push('/games-store')}

    function handleGoToExpensesTracker() { history.push('/expenses-tracker')}

// ROUTES

    return ( 
        <>
            { <> <Header onHomePage={handleGoToHomePage} onAboutMe={handleGoToAboutMe} onContact={handleGoToContact} onProjects={handleGoToProjects} /> 
                    <Route exact path="/" render={() => <Redirect to="/home-page" /> }/>
                    <Route path="/home-page" render={() => <HomePage onProjects={handleGoToProjects} /> }/>  
                    <Route path="/about-me" render={() => <AboutMe /> }/>
                    <Route path="/contact" render={() => <Contact /> }/>
                    <Route path="/projects-container" render={() => <ProjectsContainer /> && <Projects onTime2Padel={handleGoToTime2Padel} 
                        onSkyBeer={handleGoToSkyBeer} onPersonalWebsite={handleGoToPersonalWebsite} onGnomesReact={handleGoToGnomesReact} 
                        onGnomesRedux={handleGoToGnomesRedux} onAdevintaVanilla={handleGoToAdevintaVanilla} onMusicLetters={handleGoToMusicLetters} 
                        onGamesStore={handleGoToGamesStore} onExpensesTracker={handleGoToExpensesTracker} /> }/> 
                    <Route path="/time2padel" render={() => <Time2Padel /> }/> 
                    <Route path="/skybeer" render={() => <SkyBeer /> }/>
                    <Route path="/personal-website" render={() => <PersonalWebsite /> }/>
                    <Route path="/gnomes-react" render={() => <GnomesReact /> }/>
                    <Route path="/gnomes-redux" render={() => <GnomesRedux /> }/>
                    <Route path="/adevinta-vanilla" render={() => <AdevintaVanilla /> }/>
                    <Route path="/music-letters" render={() => <MusicLetters /> }/>
                    <Route path="/games-store" render={() => <GamesStore /> }/>
                    <Route path="/expenses-tracker" render={() => <ExpensesTracker /> }/>
                
            </> }

        </>
    )
})