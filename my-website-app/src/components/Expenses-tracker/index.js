import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="expenses-tracker">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="expenses-tracker__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/expenses-tracker1.png"/>
                            <img className="images__image" src="./img/expenses-tracker2.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Expenses Tracker</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, Skeleton, Javascript, React <br />
                                    <br />Expenses tracker it is a tool that allows a person to introduce their budget and 
                                    add all their expenses on a list, that at the same time, will remove from the total, giving 
                                    notices in different colors depending on the quantity remaining.
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/expenses-tracker">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/expenses-tracker"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://expenses-tracker-react.netlify.app">
                                        <Button message='SEE DEMO' />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})