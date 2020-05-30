import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="tropical-resort">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="tropical-resort__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/tropical-resort1.png"/>
                            <img className="images__image" src="./img/tropical-resort2.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Tropical Resort</h2>
                                <p className="box__text">
                                    Technologies used: CSS (+ styled components), Javascript, Gatsby, GraphQL and DatoCMS. <br />
                                    <br />
                                    Tropical Resort is an easy website, with server-side rendering, developed with Gatsby. The aim of that 
                                    project was understand how to use Gatsby and improve the SEO positioning of a website. <br />
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/tropical-resort">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/tropical-resort"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://tropical-resort.netlify.app">
                                        <Button message='SEE DEMO' />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})