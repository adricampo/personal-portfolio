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
                                <h3>SkyBeer 🍺</h3>
                            </div>
                            <div className="box__direct-access">
                                <p>Have a look to the project</p>
                                <a className="box__container link" href="https://oscarerre.github.io/sky-beer">
                                    <img className="box__icon" src="./img/zoom.png" href="https://oscarerre.github.io/sky-beer"/>
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