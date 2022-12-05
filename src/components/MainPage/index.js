import React, { useState } from 'react';
import NavBar from '../NavBar';
import bootstrap from 'bootstrap';

export default function MainPage() {

    const [page, pageChange] = useState('About');

    const showPage = () => {
        if (page === 'About') {
            return <About />;
        }
        


        return <ContactMe />
    }


    return (
        <div>

        </div>
    );
}