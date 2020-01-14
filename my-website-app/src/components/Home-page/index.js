import React from 'react'
// import './index.sass'
export default function ({}) {
    return <>
            <section className="home-page">
            <section className="myName">
                <div className="myName__background background">
                    <img className="background__profile-photo" src="./img/profilePhoto.png"/>
                </div>
                <div className="myName__titles titles">
                    <h2>Hi I'm Adri Campo</h2>
                    <h4>Junior Full-Stack Developer</h4>
                    <h5>based in Badalona, researching the intersection between technology and mental illness 🤪✌🏻</h5>
                    <button className="titles__button">Check out my work</button>
                </div>
            </section>
            <section className="contact">
                <h3>Feel free to contact me!</h3> 
                <div className="contact__socialmedia socialmedia">
                    <div className="socialmedia__info">
                        <a className="socialmedia link" href="https://www.linkedin.com/in/adricampo">
                            <img className="socialmedia__icon" src="./img/linkedin-logo512.png" href="https://www.linkedin.com/in/adricampo/?locale=en_US"/>
                        </a>
                    </div>
                    <div className="socialmedia__info">
                        <a className="socialmedia link" href="https://github.com/adricampo">
                            <img className="socialmedia__icon" src="./img/github_icon-512.png" href="https://github.com/adricampo"/>
                        </a>
                    </div>
                    <div className="socialmedia__info"> 
                        <a className="socialmedia link" href="mailto:adribdn7@gmail.com">
                            <img className="socialmedia__icon" src="./img/gmail-logo.png"/>
                        </a>
                    </div> 
                </div>
            </section>
        </section>
    </>
}