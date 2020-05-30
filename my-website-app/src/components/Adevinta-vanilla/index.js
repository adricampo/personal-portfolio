import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }
    return <>
            <section className="adevinta">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="adevinta__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/adevinta-1.png"/>
                            <img className="images__image" src="./img/adevinta-2.png"/>
                            <img className="images__image" src="./img/adevinta-3.png"/>
                            <img className="images__image" src="./img/adevinta-4.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Film Store</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript<br />
                                    <br />Film store is a technical test done without using any framework, pure javascript. The app lets the
                                    user to search movies through external API calls and once the results are retrieved, give the user the possibility to
                                    sort by published year or the rating.<br />
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/film-store">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/film-store"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://adricampo.github.io/film-store/">
                                        <Button message='SEE DEMO' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
})