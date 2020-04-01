import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="skybeer">
                    <div className="projects__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/skyBeer1.png"/>
                            <img className="images__image" src="./img/skyBeer2.png"/>
                            <img className="images__image" src="./img/skyBeer3.png"/>
                            <img className="images__image" src="./img/skyBeer4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <a className="box__container link" href="https://oscarerre.github.io/sky-beer">
                                    <h3>SkyBeer 🍺</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://github.com/adricampo/sky-beer">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/sky-beer"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript, React, TDD <br />
                                <br />For the project we had to chose a public use API to develop an App with React. Using AJAX methodology, we had to obtain information from the API using calls. 
                                The App allowed users to register and authenticate, make different searches and save/list favorites. 
                                Additionally, for the project we implemented a rating system that allowed users to rank the articles.  
                            </p>
                        </div>
                    </div>
            </section>
        </>
}