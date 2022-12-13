import React from 'react'
import '../../App.css'

function Footer() {

    return (
        <div className='d-flex justify-content-center text-info'>
            <a href="https://github.com/Jstelzl" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-2">
                <i className="bi bi-github text-info" />
            </a>
            <a href="https://www.linkedin.com/in/josiah-stelzl-3122b4241/" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-2">
                <i className="bi bi-linkedin text-info" />
            </a>
        </div>
    );

}

export default Footer;