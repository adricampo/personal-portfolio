import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="games-store">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="games-store__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/games-store1.png"/>
                            <img className="images__image" src="./img/games-store2.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Games Store</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, Bootstrap, Axios, Javascript, React, Redux <br />
                                    <br />Games-store is a project made to learn more deeply how to use Redux. You can see
                                    a list of products, create, edit and delete them individually. There is a fake server for the backend part, which is 
                                    created using json-server.
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/games-store">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/games-store"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="">
                                        {/* <Button message='SEE DEMO' /> */}
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})