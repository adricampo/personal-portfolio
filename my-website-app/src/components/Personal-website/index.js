import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="personal-website">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="personal-website__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/website1.png"/>
                            <img className="images__image" src="./img/website2.png"/>
                            <img className="images__image" src="./img/website3.png"/>
                            <img className="images__image" src="./img/website4.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Personal Portfolio</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript, React, Node.js<br />
                                    <br /> This project is a personal website to show my projects, information an more. 
                                    It's a visual way to open a door between myself and the world. Feel free to have a look, make me comments and give me any feedback to improve it.             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/personal-portfolio">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/personal-portfolio"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://adricampo.netlify.com">
                                        <Button />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    </>
})