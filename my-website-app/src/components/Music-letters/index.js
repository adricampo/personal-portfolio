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
                            <img className="images__image" src="./img/songs-letters1.png"/>
                            <img className="images__image" src="./img/songs-letters2.png"/>
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Music Letters</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, Bootstrap, Javascript, React <br />
                                    <br />Music-letters is an small project developed with React.
                                    It allows to search a huge range of songs lettters and also show the biography an social
                                    media of the singer. Components style was implemented with boostrap classes. <br />
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/music-letters">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/music-letters"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://music-letters.netlify.app">
                                        <Button message='SEE DEMO' />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})