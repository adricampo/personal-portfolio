import React from 'react'
import './index.sass'
export default function () {
    return <>
            <section className="gnomes-redux">
                    <div className="gnomes-redux__box box">
                        <div className="box__images images">
                            <img className="images__image" src="./img/redux-icon.png"/>
                            <img className="images__image" src="./img/gnomes-react-1.png"/>
                            <img className="images__image" src="./img/gnomes-react-3.png"/>
                            <img className="images__image" src="./img/gnomes-react-4.png"/>
                        </div>
                        <div className="box__project-info">
                            <div className="box__title">
                                <a className="box__container link" href="https://gnomes-redux.netlify.com">
                                    <h3>AXA Gnomes Test Redux 🍄</h3>
                                </a>
                            </div>
                            <div className="box__direct-access">
                                <p className="box__message">Click on the title to have a look to the project or check the source code here =></p>
                                <a className="box__container link" href="https://gnomes-redux.netlify.com">
                                    <img className="box__icon" src="./img/github_icon-512.png" href="https://gnomes-redux.netlify.com"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Technologies used: HTML, CSS, SASS, Javascript, React, Redux, Node.js <br />
                                <br />Gnomes-redux is an individual project developed using React with Redux, version thunk.
                                The project has a landing page, another view with a search component that allows the user to find by 
                                query and also chose some filters to make a more accurate search and the results, and the last view 
                                shows the detail of any of the results.
                            </p>
                        </div>
                    </div>
            </section>
        </>
}