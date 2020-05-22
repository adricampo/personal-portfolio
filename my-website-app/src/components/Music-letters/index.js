import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="music-letters">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="music-letters__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/time2padel-2.png"/>
                            <img className="images__image" src="./img/time2padel-1.png"/>
                            <img className="images__image" src="./img/time2padel-3.png"/>
                            <img className="images__image" src="./img/time2padel-4.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Music Letters</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript, React, Node.js, express, MongoDB, Mongoose, TDD <br />
                                    <br />Time2Padel is an individual project that I have developed for SkylabCoders bootcamp.
                                    It has been designed as a mobile first Application that give the users the chance to create their own teams to join the leagues you can find in a padel club.
                                    You must be registered to see the content of the page. User will be able to register in many leagues using the teams they have created with other users. <br />
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="">
                                        <img className="code__icon" src="./img/github_icon-512.png" href=""/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="">
                                        <Button />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})