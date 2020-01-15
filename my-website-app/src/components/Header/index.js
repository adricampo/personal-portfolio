import React from 'react'
import './index.sass'
export default function ({onHomePage, onAboutMe, onProjects}) {
    return <>
        <nav class="nav nav-menu">
            <img class="nav-menu__logo" src="./img/logoAC.png"/>
            <a href="#" class="nav-menu__item link" onClick={event => {
                event.preventDefault()

                onHomePage(); 
            }}>HOME</a>
            <a class="nav-menu__item link" href="#" onClick={event => {
                event.preventDefault()

                onAboutMe(); 
            }}>ABOUT ME</a>
            <a class="nav-menu__item link" href="#" onClick={event => {
                event.preventDefault()

                onProjects(); 
            }}>PORTFOLIO</a>
        </nav>

    </>
}