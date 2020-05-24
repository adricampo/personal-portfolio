import React, { Fragment, useState } from 'react'
import Button from '../Button'
import './index.sass'

const Contact = () => {
    const [ userMessage, saveUserMessage ] = useState({
        name: "",
        email: "",
        message: ""
    })

    // Destructuring userMessage 
    const { name, email, message } = userMessage;

    // Takes the user information
    const handleChange = e => {
        saveUserMessage({
            ...userMessage,
            [e.target.name]: e.target.value
        })
    }


    return ( <Fragment>
                <section className="contact">
                    <div className="contact__container container">
                        <div className="container__client-info">
                            <form 
                                className="form-container"
                                // onSubmit={submitUserMessage}
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
                                {/* <button
                                    type="submit"
                                    className="button form-button"
                                >SEND MESSAGE</button> */}
                                <a href="mailto:adribdn7@gmail.com">
                                    <Button className="button" message='SEND MESSAGE' /> 
                                </a>
                            </form>
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