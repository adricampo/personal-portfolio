import React from 'react'
import './index.sass'
export default function ({onTime2Padel, onSkyBeer, onPersonalWebsite}) {
    return <>
            <nav className="projects-nav nav-menu">
                <a href="#" class="nav-menu__item link" onClick={event => {
                event.preventDefault()

                onTime2Padel(); 
            }}>Time2Padel</a>
                <a href="#" class="nav-menu__item link" onClick={event => {
                event.preventDefault()

                onSkyBeer(); 
            }}>SkyBeer</a>
                <a href="#" class="nav-menu__item link" onClick={event => {
                event.preventDefault()

                onPersonalWebsite(); 
            }}>PersonalWebsite</a>
            </nav>
       
    </>
}