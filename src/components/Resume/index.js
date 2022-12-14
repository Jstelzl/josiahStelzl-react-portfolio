import React from 'react';
import ResumeLink from "../../assets/Josiah-Stelzl.pdf";
import bootstrap from 'bootstrap';


function Resume() {
    return (
        <React.Fragment>
            <div className='container mx-auto bg-dark'>
                <div className='row row-cols-1 row-cols-md-2 g-6'>
                    <div className='col mx-auto p-4'>
                        <div className="card border-info bg-dark p-3 align-items-center">
                            <h3 className='card-title text-center text-info mx'>Resume</h3>
                            <a className='link-info' href={ResumeLink} download>
                                <h5 className='text-info'>Download Resume</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Resume;