import React from 'react';
import headerImage from '../../assets/photos/header-image.jpeg';
import bootstrap from 'bootstrap'

function NavBar({ page, handlePageChange }) {

    return (

        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid justify-content-center fixed-top bg-dark'>
                <div>
                    <ul className='nav'>
                        {/* resume */}
                        <li className='nav-item'>
                            <a
                                href='#resume'
                                onClick={() => handlePageChange('resume')}
                                className={page === 'resume' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                Resume
                            </a>
                        </li>
                        {/* About */}
                        <li className='nav-item'>
                            <a
                                href='#about'
                                onClick={() => handlePageChange('about')}
                                className={page === 'about' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                About
                            </a>
                        </li>
                        {/* Portfolio */}
                        <li className='nav-item'>
                            <a
                                href='#portfolio'
                                onClick={() => handlePageChange('portfolio')}
                                className={page === 'portfolio' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                Portfolio
                            </a>
                        </li>
                        {/* Contacts */}
                        <li className='nav-item'>
                            <a
                                href='#contact'
                                onClick={() => handlePageChange('contact')}
                                className={page === 'contact' ? 'nav-link active text-info text-opacity-15' : 'nav-link text-secondary'}
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;