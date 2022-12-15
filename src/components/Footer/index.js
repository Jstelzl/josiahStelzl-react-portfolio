import React from 'react'
import '../../App.css'

function Footer() {

    return (

        <div className="d-flex justify-content-center text-info fixed-bottom bg-light p-3">
            <a href="https://github.com/Jstelzl" target="_blank" className="btn btn-outline-dark mx-auto col-2">
                <i className="bi bi-github text-info" />
            </a>
            <a href="https://www.linkedin.com/in/josiah-stelzl-3122b4241/" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-2">
                <i className="bi bi-linkedin text-info" />
            </a>
            <a href="https://www.facebook.com/josiah.stelzl.5" target="_blank" className="btn btn-outline-dark mx-auto position-relative col-2">
                <i className="bi bi-facebook text-info" />
            </a>
        </div>
    );

}

export default Footer;