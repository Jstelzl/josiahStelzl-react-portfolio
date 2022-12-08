import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [contactState, setContactState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const { email, name, message } = contactState;

    
}