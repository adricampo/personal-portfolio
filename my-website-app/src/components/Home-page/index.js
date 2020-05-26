import React from 'react'
import './index.sass'
import Typewriter from 'typewriter-effect'
export default function ({ onProjects }) {
    return <>
        <section className="home-page">
            <section className="myName">
                <div className="myName__container container">
                    <div className="container__titles titles">
                    <h2>Hi I'm Adri Campo</h2>
                    <Typewriter
                        options={{
                            strings: 
                            [
                            `I'm a Junior Full Stack Developer.`, 
                            `Based in Barcelona.`, 
                            `Currently looking for a job as a Front End Developer.`, 
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString()
                            
                            .pauseFor(1500)
                            .deleteAll()
                           
                            .start();
                        }}
                        />
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