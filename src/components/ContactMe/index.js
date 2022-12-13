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
        <body className='mx-auto bg-dark'>
            <div className="container mx-auto">
                <div className="row row-cols-1 row-cols-md-2 g-7">
                    <div className="col mx-auto p-4">
                        <div className='card border bg-dark p-3 align-items-center'>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className= 'p-3 align-items-center'>
                                    <label htmlFor="name" />
                                    <input type="text" placeholder='Enter Name' name="name" defaultValue={name} onBlur={handleChange} />
                                </div>
                                <div className= 'p-3 align-items-center'>
                                    <label htmlFor="email" />
                                    <input type="email" placeholder='Enter Email Address' name="email" defaultValue={email} onBlur={handleChange} />
                                </div>
                                <div className= 'p-3 align-items-center'>
                                    <label htmlFor="message" />
                                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}
                                <div className='p-3 align-items-center'>
                                    <button data-testid="button" type="submit">Submit</button>
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