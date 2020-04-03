import React from 'react'
import './index.sass'
export default function ({ onProjects }) {
    return <>
        <section className="home-page">
            <section className="myName">
                {/* <div className="myName__background background">
                    <img className="background__profile-photo" src="./img/profilePhoto.png"/>
                </div> */}
                <div className="myName__container container">
                    <div className="container__titles titles">
                        <h2>Adri Campo · Junior Full-Stack Developer</h2>
                        {/* <h4 className="titles__direction2">Junior Full-Stack Developer</h4> */}
                        {/* <h5>living and learning in Badalona, Barcelona 😎✌🏻</h5> */}
                        <button className="titles__button" onClick={event => {
                            event.preventDefault()

                            onProjects();
                        }}>Check out my work</button>
                    </div>
                </div>
            </section>
        </section>
    </>
}