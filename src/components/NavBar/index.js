import React from 'react';
import bootstrap from 'bootstrap'

function NavBar({ page, pageChange }) {

    return(
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid bg-dark justify-content-center'>
                <div className='bg-dark' id='NavBar'>
                    <ul className='nav bg-dark'>
                        <li className='nav-item bg-dark'>
                            <a 
                                href='#resume'
                                onClick={() => pageChange('resume')}
                                className={page === 'resume' ? 'nav-link active text-info text-opacity-75 bg-dark' : 'nav-link text-secondary'}
                            > 
                            Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;