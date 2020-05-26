import React, { useState } from 'react'
import Spinner from "../Spinner"
import './index.sass'

export default function ({ onTime2Padel, onSkyBeer, onPersonalWebsite, onGnomesReact, onGnomesRedux, 
    onAdevintaVanilla, onMusicLetters, onGamesStore, onExpensesTracker }) {
    const [ cargando, guardarCargando ] = useState(true)

    setTimeout(() => {
        guardarCargando(false)
    }, 2000)

    return <>
        { cargando 
        ? <Spinner /> 
        : <section className="projects">
                <div className="projects-nav nav-menu">
                    <div className="nav-menu__item-container1" onClick={event => {
                        event.preventDefault()

                        onTime2Padel();
                    }}>
                        <a href="#" className="nav-menu__item1">Time2Padel</a>
                    </div>
                    <div className="nav-menu__item-container2" onClick={event => {
                        event.preventDefault()

                        onSkyBeer();
                    }}>
                        <a href="#" className="nav-menu__item2">SkyBeer</a>
                    </div>
                    <div className="nav-menu__item-container3" onClick={event => {
                        event.preventDefault()

                        onPersonalWebsite();
                    }}>
                        <a href="#" className="nav-menu__item3">Portfolio</a>
                    </div>
                    <div className="nav-menu__item-container4" onClick={event => {
                        event.preventDefault()

                        onGnomesReact();
                    }}>
                        <a href="#" className="nav-menu__item4">GnomesWorld React</a>
                    </div>
                    <div className="nav-menu__item-container5" onClick={event => {
                        event.preventDefault()

                        onAdevintaVanilla();
                    }}>
                        <a href="#" className="nav-menu__item5">FilmStore</a>
                    </div>
                    <div className="nav-menu__item-container6" onClick={event => {
                        event.preventDefault()

                        onGnomesRedux();
                    }}>
                        <a href="#" className="nav-menu__item6">GnomesWorld Redux</a>
                    </div>
                    <div className="nav-menu__item-container7" onClick={event => {
                        event.preventDefault()

                        onMusicLetters();
                    }}>
                        <a href="#" className="nav-menu__item7">Music Letters</a>
                    </div>
                    <div className="nav-menu__item-container8" onClick={event => {
                        event.preventDefault()

                        onGamesStore();
                    }}>
                        <a href="#" className="nav-menu__item8">Games Store</a>
                    </div>
                    <div className="nav-menu__item-container9" onClick={event => {
                        event.preventDefault()

                        onExpensesTracker();
                    }}>
                        <a href="#" className="nav-menu__item9">Expenses Tracker</a>
                    </div>
                </div>
            </section> 

        }
    </>
}