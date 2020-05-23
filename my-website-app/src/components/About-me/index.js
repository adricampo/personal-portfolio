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
                        Graduated as Industrial Engineer especialized in management at UAB, in the last year of the college I made an exchange program to the University of Applied Sciences Munich. Year and a half after, I finished the Master degree in Project Management at UPC. 
                        Background as a supply chain manager in lead companies as <span className="bolder">MANGO</span> and <span className="bolder">MONDELEZ</span>, also experience as project manager in many logistic and safety projects in <span className="bolder">LOGISFASHION</span> and <span className="bolder">DANONE</span>.                        
                        <br /> 
                        <br /> 
                        In summer of 2019 I decided to change my life, I made the decision to focus my career into the IT sector and I started looking for courses to learn programming. In September I enrolled into <span className="bolder">SKYLAB CODERS ACADEMY BOOTCAMP</span> and I finished this course, which is specialized in MERN technologies, in December.                         
                        <br />
                        Now I am looking for a job opportunity as a <span className="bolder">DEVELOPER</span> (front, back or full stack) that allows me to start this new stage.                  
                    </p>
                    <p className="info__text"> 
                        <br />
                        <span className="bolder">Fields of knowledge:</span>   
                        <br />  
                        HTML5 | CSS3 | SASS (BEM & SUIT) | Javascript | React   
                        <br />                   
                        NodeJS | Express | MongoDB | Mongoose | REST API    
                        <br />                     
                        Jasmine | Mocha | Chai | Jest                        
                        <br />
                        Git | Postman
                    </p>
                </div>
            </div>
        </section>
    </>
}