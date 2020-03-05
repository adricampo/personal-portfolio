import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="adevinta">
                    <div className="adevinta__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/adevinta-1.png"/>
                            <img className="images__image" src="./img/adevinta-2.png"/>
                            <img className="images__image" src="./img/adevinta-3.png"/>
                            <img className="images__image" src="./img/adevinta-4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <h3>Adevinta 🎥</h3>
                            </div>
                            <div className="box__direct-access">
                                <p>Have a look to the project :</p>
                                <a className="box__container link" href="https://adricampo.github.io/adevinta-test-vanilla/">
                                    <img className="box__icon" src="./img/zoom.png" href="https://adricampo.github.io/adevinta-test-vanilla/"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Project duration: 3/4 days<br />
                                <br />Adevinta Test Vanilla, is a technical test done without using any framework, pure javascript. The app lets the
                                user to search movies through external API calls and once the results are retrieved, give the user the possibility to
                                sort by published year or the rating.<br />
                                <br />             
                            </p>
                        </div>
                    </div>
            </section>
        </>
}