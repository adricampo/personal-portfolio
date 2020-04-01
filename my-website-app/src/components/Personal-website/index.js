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
                                <a className="box__container link" href="https://portfolio-adricampo.netlify.com">
                                    <h3>Personal Portfolio  🖥</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://github.com/adricampo/personal-portfolio">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/personal-portfolio"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript, React, Node.js<br />
                                <br /> This project is a personal website to show my projects, information an more. 
                                It's a visual way to open a door between myself and the world. Feel free to have a look, make me comments and give me any feedback to improve it.             
                            </p>
                        </div>
                    </div>
            </section>
    </>
}