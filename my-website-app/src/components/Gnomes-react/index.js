import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }
    return <>
            <section className="gnomes-react">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="gnomes-react__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/react-icon.png"/>
                            <img className="images__image" src="./img/gnomes-react-1.png"/>
                            <img className="images__image" src="./img/gnomes-react-3.png"/>
                            <img className="images__image" src="./img/gnomes-react-4.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Gnomes World React</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript, React, Node.js <br />
                                    <br />Gnomes-react is an individual project developed using classical React, sending props.
                                    The project has a landing page, another view with a search component that allows the user to find by 
                                    query and also chose some filters to make a more accurate search and the results, and the last view 
                                    shows the detail of any of the results.
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/gnomes-world-react">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/gnomes-world-react"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://gnomes-react.netlify.com">
                                        <Button />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
})