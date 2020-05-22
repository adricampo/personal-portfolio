import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }
    return <>
            <section className="skybeer">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="projects__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/skyBeer1.png"/>
                            <img className="images__image" src="./img/skyBeer2.png"/>
                            <img className="images__image" src="./img/skyBeer3.png"/>
                            <img className="images__image" src="./img/skyBeer4.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Skybeer</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript, React, TDD <br />
                                    <br />For the project we had to chose a public use API to develop an App with React. Using AJAX methodology, we had to obtain information from the API using calls. 
                                    The App allowed users to register and authenticate, make different searches and save/list favorites. 
                                    Additionally, for the project we implemented a rating system that allowed users to rank the articles.  
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/sky-beer">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/sky-beer"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://oscarerre.github.io/sky-beer/">
                                        <Button />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
})