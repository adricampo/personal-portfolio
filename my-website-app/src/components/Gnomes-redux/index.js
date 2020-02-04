import React from 'react'
import './index.sass'
export default function ({}) {
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
                                <h3>Gnomes-redux 🍄</h3>
                            </div>
                            <div className="box__direct-access">
                                <p>Have a look to the project</p>
                                <a className="box__container link" href="https://sharp-shirley-d9dca7.netlify.com">
                                    <img className="box__icon" src="./img/zoom.png" href="https://sharp-shirley-d9dca7.netlify.com"/>
                                </a>
                            </div>
                            <p className="box__text">
                                Project duration: 3/4 days <br />
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