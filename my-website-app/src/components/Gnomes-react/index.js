import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="gnomes-react">
                    <div className="gnomes-react__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/react-icon.png"/>
                            <img className="images__image" src="./img/gnomes-react-1.png"/>
                            <img className="images__image" src="./img/gnomes-react-3.png"/>
                            <img className="images__image" src="./img/gnomes-react-4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <a className="box__container link" href="https://gnomes-react.netlify.com">
                                    <h3>AXA Gnomes Test React 🍄</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://github.com/adricampo/gnomes-axa">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo/gnomes-axa"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript, React, Node.js <br />
                                <br />Gnomes-react is an individual project developed using classical React, sending props.
                                The project has a landing page, another view with a search component that allows the user to find by 
                                query and also chose some filters to make a more accurate search and the results, and the last view 
                                shows the detail of any of the results.
                            </p>
                        </div>
                    </div>
            </section>
        </>
}