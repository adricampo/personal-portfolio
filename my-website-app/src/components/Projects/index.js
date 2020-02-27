import React from 'react'
import './index.sass'
export default function ({onTime2Padel, onSkyBeer, onPersonalWebsite, onGnomesReact, onGnomesRedux}) {
    return <>
            
            <nav className="projects-nav nav-menu">
                <div class="nav-menu__item-container1" onClick={event => {
                        event.preventDefault()

                        onTime2Padel(); 
                    }}>
                    <a href="#" class="nav-menu__item1">Time2Padel</a>
                </div>
                <div class="nav-menu__item-container2" onClick={event => {
                        event.preventDefault()

                        onSkyBeer(); 
                    }}>
                    <a href="#" class="nav-menu__item2">SkyBeer</a>
                </div>
                <div class="nav-menu__item-container3" onClick={event => {
                        event.preventDefault()

                        onPersonalWebsite(); 
                    }}>
                    <a href="#" class="nav-menu__item3">PersonalWebsite</a>
                </div>
                <div class="nav-menu__item-container4" onClick={event => {
                        event.preventDefault()

                        onGnomesReact(); 
                    }}>
                    <a href="#" class="nav-menu__item4">Gnomes React</a>
                </div>
                <div class="nav-menu__item-container5" onClick={event => {
                        event.preventDefault()

                        onGnomesRedux(); 
                    }}>
                    <a href="#" class="nav-menu__item5">Gnomes Redux</a>
                </div>
            </nav>
       
    </>
}