import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="personal-website">
                    <div className="personal-website__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/website1.png"/>
                            <img className="images__image" src="./img/website2.png"/>
                            <img className="images__image" src="./img/website3.png"/>
                            <img className="images__image" src="./img/website4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <h3>Personal Website  🖥</h3>
                            </div>
                            <div className="box__direct-access">
                                <p>Have a look to the project</p>
                                <a className="box__container link" href="https://trusting-lumiere-9874be.netlify.com">
                                    <img className="box__icon" src="./img/zoom.png" href="https://trusting-lumiere-9874be.netlify.com"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Project duration: 2/3 days <br />
                                <br /> This project is a personal website to show my projects, information an more. 
                                It's a visual way to open a door between myself and the world. Feel free to have a look, make me comments and give me any feedback to improve it.             
                            </p>
                        </div>
                    </div>
            </section>
    </>
}