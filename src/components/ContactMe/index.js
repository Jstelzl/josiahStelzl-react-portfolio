import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <body className="bg-dark mx-auto">
            
            <div className="container mx-auto vh-height p-5">
                <div className="row row-cols-1 row-cols-md-2 g-7">
                    <div className="col mx-auto p-4">
                        <div className="card border-info bg-dark p-3 align-items-center">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className='p-3 align-items-center'>
                                    <input
                                        type="text"
                                        name="Name"
                                        defaultValue={name}
                                        onBlur={handleChange}
                                        placeholder="Enter Name"

                                    />
                                </div>
                                <div className='p-3 align-items-center'>                                   
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={email}
                                        onBlur={handleChange}
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div className='p-3 align-items-center'>
                                    <textarea
                                        name="Message"
                                        rows="5"
                                        defaultValue={message}
                                        onBlur={handleChange}
                                        placeholder="Enter Message"
                                    />
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-text text-info">{errorMessage}</p>
                                    </div>
                                )}
                                <div className="text-center">
                                    <button
                                        data-testid="button"
                                        type="submit"
                                        className="btn btn-outline-info"
                                    >
                                        Submit

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ContactForm;