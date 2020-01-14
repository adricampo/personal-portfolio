import React from 'react'
// import './index.sass'
export default function ({handleGoToHomePage}) {
    return <>
        <nav class="nav nav-menu">
            <img class="nav-menu__logo" src="./img/logoAC.png"/>
            <a class="nav-menu__item link" href="#" onClick={event => {
                event.preventDefault()

                handleGoToHomePage(); 
            }}>HOME</a>
            <a class="nav-menu__item link" href="#">ABOUT ME</a>
            <a class="nav-menu__item link" href="#">PORTFOLIO</a>
        </nav>

    </>
}