import React, { useState } from 'react';
import NavBar from '../NavBar';
import About from '../About';
import ContactMe from '../ContactMe';
import MyPortfolio from '../Portfolio';
import Footer from '../Footer';
import bootstrap from 'bootstrap';

export default function MainPage() {

    const [page, pageChange] = useState('About');

    const showPage = () => {
        if (page === 'About') {
            return <About />;
        }
        if ( page === 'Portflolio') {
            return <MyPortfolio />
        }
        // if ( page === 'Resume') {
        //     return <Resume />
        // }
        return <ContactMe />
    };

    const handlePageChange = (updatePage) => pageChange(updatePage);

    return (
        <div>
            <NavBar page={page} handlePageChange={handlePageChange} />
            {showPage()}
            
            <Footer />
        </div>
    );
}