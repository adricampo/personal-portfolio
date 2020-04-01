import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="time2padel">
                    <div className="time2padel__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/time2padel-2.png"/>
                            <img className="images__image" src="./img/time2padel-1.png"/>
                            <img className="images__image" src="./img/time2padel-3.png"/>
                            <img className="images__image" src="./img/time2padel-4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <a className="box__container link" href="https://time2padel.herokuapp.com/">
                                    <h3>Time2Padel 🎾</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://github.com/adricampo/time2padel">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/time2padel"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript, React, Node.js, express, MongoDB, Mongoose, TDD <br />
                                <br />Time2Padel is an individual project that I have developed for SkylabCoders bootcamp.
                                It has been designed as a mobile first Application that give the users the chance to create their own teams to join the leagues you can find in a padel club.
                                You must be registered to see the content of the page. User will be able to register in many leagues using the teams they have created with other users. <br />
                                <br />             
                            </p>
                        </div>
                    </div>
            </section>
        </>
}