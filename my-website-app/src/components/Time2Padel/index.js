import React from 'react'
import './index.sass'
export default function ({}) {
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
                                <h3>Time2Padel 🎾</h3>
                            </div>
                            <div className="box__direct-access">
                                <p>Have a look to the project :</p>
                                <a className="box__container link" href="https://time2padel.herokuapp.com/">
                                    <img className="box__icon" src="./img/zoom.png" href="https://time2padel.herokuapp.com/"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Project duration: 2.5 weeks<br />
                                <br />Time2Padel is an individual project that I have developed for SkylabCoders bootcamp, as the endpoint of all the course we did.
                                It has been designed as a mobile first Application that give the users the chance to create their own teams to join the leagues you can find in a padel club.
                                You must be registered to see the content of the page, once you do that you can find many information such as the club last news, the teams you ar part of, the requests you have received from other members of the Application to form teams and the list of leagues the club have available on that moment, filtered by level, date and time.
                                User will be able to register in many leagues using the teams they have created with other users. <br />
                                <br />             
                            </p>
                        </div>
                    </div>
            </section>
        </>
}