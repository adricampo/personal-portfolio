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
                                <a className="box__container link" href="https://adricampo.github.io/adevinta-test-vanilla/">
                                    <h3>Adevinta Movies/Series Test 🎥</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://github.com/adricampo/adevinta-test-vanilla">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/adevinta-test-vanilla"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript<br />
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