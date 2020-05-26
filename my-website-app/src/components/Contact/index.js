import React, { Fragment, useState } from 'react'
import Button from '../Button'
import './index.sass'

const Contact = () => {
    // const [ userMessage, saveUserMessage ] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // })

    // // Destructuring userMessage 
    // const { name, email, message } = userMessage;

    // // Takes the user information
    // const handleChange = e => {
    //     saveUserMessage({
    //         ...userMessage,
    //         [e.target.name]: e.target.value
    //     })
    // }

    return ( <Fragment>
                <section className="contact">
                    <div className="contact__container container">
                        <div className="container__client-info client-info">
                            <div className="client-info__size">

                                <h3 className="title-desktop">
                                    Spot a bug on the site? &nbsp; &nbsp; 
                                    Can the site be improved? &nbsp; &nbsp; 
                                    Want to say hello? 
                                    <br />
                                    <br /><span id="bolder">Whatever, let's talk! </span>
                                </h3>
                                <h3 className="title-mobile">
                                    Spot a bug on the site? 
                                    <br />Can the site be improved? 
                                    <br />Want to say hello? 
                                    <br />
                                    <br /><span id="bolder">Whatever, let's talk! </span>
                                </h3>

                                <div className="button-container">
                                    <a href="mailto:adribdn7@gmail.com">
                                        <Button className="button" message='SEND ME A MESSAGE' /> 
                                    </a>
                                </div>
                                {/* <form 
                                    className="form-container"
                                >
                                    <div className="form-group">
                                        <label></label>
                                        <input
                                            type="text"
                                            className="input"
                                            name="username"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            value={name}
                                        />
                                    </div>    
                                    <div className="form-group">
                                        <label></label>
                                        <input
                                            type="email"
                                            className="input"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label></label>
                                        <textarea
                                            name="message"
                                            className="text-area"
                                            placeholder="Write your message here"
                                            onChange={handleChange}
                                            value={message}
                                        ></textarea>
                                    </div>    
                                    <button
                                        type="submit"
                                        className="button form-button"
                                    >SEND MESSAGE</button>
                                </form> */}

                            </div>    
                        </div>
                        <div className="container__download-cv download-cv">
                            <div className="download-cv__info">
                                <h3 className="download-cv__title">
                                    Would you like to know more about my professional career?
                                </h3>
                                {/* <button
                                    type="submit"
                                    className="button"
                                >DOWNLOAD MY CV</button>   */}
                                <a href="./cv.pdf" download>
                                    <Button message='DOWNLOAD MY CV' />
                                </a>
                            </div>
                            <div className="download-cv__image">
                                <img className="image" src="./img/download-cv.png" />
                            </div>
                        </div>

                    </div>
                </section>
        </Fragment> )
}

export default Contact