import React, { useState } from 'react'
import './index.sass'

export default function ({onHomePage, onAboutMe, onProjects, onContact}) {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    function onToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    function onClose() {
        setToggleMenu(!toggleMenu)
    }

    return ( <>
        <nav className="nav nav-menu">
            {/* <img className="nav-menu__logo" src="./img/logo_size.jpg"/> */}
            <input type="checkbox" id="show-menu"/>
            <label className="nav-menu__hamburguer-icon" htmlFor="show-menu">
                <i onClick={onToggleMenu} className="fas fa-bars"></i>
            </label>
            <div className={toggleMenu ? 'nav-menu__hamburguer-menu menu-show' : 'nav-menu__hamburguer-menu menu-hide'}>
                <i id="close" className="close fas fa-times" onClick={ event => {
                    event.preventDefault()

                    onToggleMenu(); onClose()
                }}></i> 
                <ul className="menu_list list">
                    <a href="#" className="list__item link" onClick={event => {
                        event.preventDefault()

                        onToggleMenu(); onHomePage(); 
                    }}>HOME</a>
                    <a className="list__item link" href="#" onClick={event => {
                        event.preventDefault()

                        onToggleMenu(); onProjects(); 
                    }}>PORTFOLIO</a>
                    <a className="list__item link" href="#" onClick={event => {
                        event.preventDefault()

                        onToggleMenu(); onAboutMe(); 
                    }}>ABOUT ME</a>
                    <a className="list__item link" href="#" onClick={event => {
                        event.preventDefault()

                        onToggleMenu(); onContact(); 
                    }}>CONTACT</a>
                </ul>
            </div>
            {/* <section className="contact">   
                <div className="contact__box"> */}
            <div className="socialmedia">
                <div className="socialmedia__info">
                    <a className="socialmedia link" href="https://www.linkedin.com/in/adricampo">
                        <img className="socialmedia__icon" src="./img/linkedin-logo512.png" href="https://www.linkedin.com/in/adricampo/?locale=en_US" />
                    </a>
                </div>
                <div className="socialmedia__info">
                    <a className="socialmedia link" href="https://github.com/adricampo">
                        <img className="socialmedia__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo" />
                    </a>
                </div>
                <div className="socialmedia__info">
                    <a className="socialmedia link" href="mailto:adribdn7@gmail.com">
                        <img className="socialmedia__icon" src="./img/gmail-logo.png" />
                    </a>
                </div>
            </div>
                {/* </div>
            </section> */}
        </nav>
    </>)
}