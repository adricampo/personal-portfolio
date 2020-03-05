import React from 'react'
import './index.sass'
export default function () {
    return <>
        <section className="about-me">
            <div className="about-me__welcome welcome">
                <img className="welcome__image" src="./img/aboutme-photo1.jpg"/>
                <div className="welcome__info info">
                    <h2 className="info__title title">LITTLE SUMARY OF MY STORY..</h2>
                    <br />
                    <p className="info__text">
                        Graduated as Organization Engineer at UAB, in the last year of the college I made an exchange program to the University of Applied Sciences Munich. Year and a half after, I finished the Master degree in Project Management at UPC. 
                        Background as a supply chain manager in lead companies as Mango and Mondelez, also experience as project manager in many logistic and safety projects in Logisfashion and Danone.                        
                        In summer of 2019 I decided to change my life, I made the decision to focus my career into the IT sector and I started to looking for courses to learn programming. In September I enrolled into <span className="bolder">Skylab Coders Academy Bootcamp</span> and I finished this course which is specialized in MERN technologies in December.                         
                        <br />
                        <br /><span className="bolder">Now I am looking for a job opportunity as a Full Stack Developer</span> that allows me to start this new stage, using the following technologies:                     
                    </p>
                    <p className="info__text"> 
                        <br />  
                        Front-End: HTML5 / CSS3 / SASS / CSS / BEM / JS / ReactJS    
                        <br />                   
                        Back-End: NodeJS / Express / MongoDB / Mongoose / REST API    
                        <br />                     
                        Testing: Jasmine, Mocha, Chai, Jest                        
                        <br />
                        Other: Git
                    </p>
                </div>
            </div>
        </section>
    </>
}