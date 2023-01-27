import React, { useState } from 'react';
import NavBar from '../NavBar';
import About from '../About';
import Resume from '../Resume';
import MyPortfolio from '../Portfolio';
import Footer from '../Footer';

export default function MainPage() {

    const [page, pageChange] = useState('about');

    const showPage = () => {

        if (page === 'about') {
            return <About />;
        }
        if (page === 'portfolio') {
            return <MyPortfolio />
        }
        if (page === 'resume') {
            return <Resume />
        }
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