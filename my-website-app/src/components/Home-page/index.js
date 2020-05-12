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
                            strings: [`I'm a Junior Full Stack Developer.`, 
                            `Based in Barcelona.`, 
                            `Feel free to have a look to my site.`,
                            `Now I'm looking for an opportunity as a Junior Developer.`,
                            `If you are interested on my profile please contact me.`],
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString()
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(1500)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
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