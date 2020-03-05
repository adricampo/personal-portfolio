import React from 'react'
import './index.sass'
export default function ({onHomePage, onAboutMe, onProjects}) {
    return <>
        <nav className="nav nav-menu">
            {/* <img className="nav-menu__logo" src="./img/logoAC.png"/> */}
            <a href="#" className="nav-menu__item link" onClick={event => {
                event.preventDefault()

                onHomePage(); 
            }}>HOME</a>
            <a className="nav-menu__item link" href="#" onClick={event => {
                event.preventDefault()

                onAboutMe(); 
            }}>ABOUT ME</a>
            <a className="nav-menu__item link" href="#" onClick={event => {
                event.preventDefault()

                onProjects(); 
            }}>PORTFOLIO</a>
            {/* <section className="contact">   
                <div className="contact__box"> */}
            <div className="contact__socialmedia socialmedia">
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

    </>
}