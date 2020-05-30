import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../Button'
import './index.sass'

export default withRouter(function ({ history }) {
    function onGoBack() {
        history.push('/projects-container')
    }

    return <>
            <section className="gifs-search">
                    <i id="back-button" className="fas fa-arrow-circle-left" onClick={ event => {
                        event.preventDefault()

                        onGoBack()
                    }}></i>
                    <div className="gifs-search__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/gifs-search1.png"/>
                            <img className="images__image" src="./img/gifs-search2.png"/>                        
                        </div>

                        <div className="infoAndUrls">
                            <div className="box__project-info">
                                <h2 className="box__title">Gifs Search</h2>
                                <p className="box__text">
                                    Technologies used: HTML, CSS, SASS, Javascript, Vue <br />
                                    <br />Small project done to practice with VueJS. You will find a search var where 
                                    you can introduce a text to look for gifs. The gifs come from an external API, provided by Giphy.
                                    Results are listed in a grid and each result is a link that goes to the original Giphy page to take 
                                    the url of the gif or other additional information. <br />
                                    <br />             
                                </p>
                            </div>

                            <div className="box__urls urls">
                                <div className="urls__code code">
                                    <h2 className="code__title">Source Code</h2>
                                    <a className="code__container link" href="https://github.com/adricampo/search-gifs">
                                        <img className="code__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/search-gifs"/>
                                    </a>
                                </div>
                                <div className="urls__demo">
                                    <a className="link" href="https://search-gifs.netlify.app">
                                        <Button message='SEE DEMO' />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
            </section>
        </>
})