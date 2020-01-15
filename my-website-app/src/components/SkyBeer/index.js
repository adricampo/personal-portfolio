import React from 'react'
import './index.sass'
export default function ({}) {
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
                            <h3>SkyBeer 🍺</h3>
                            <p className="box__text">
                                Project duration: 1 week <br />
                                <br />For the project we had to chose a public use API to develop an App with React. Using AJAX methodology, we had to obtain information from the API using calls. 
                                The App allowed users to register and authenticate, make different searches and save/list favorites. 
                                Additionally, for the project we implemented a rating system that allowed users to rank the articles.  
                            </p>
                        </div>
                    </div>
            </section>
        </>
}