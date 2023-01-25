import React from 'react';
import ResumeLink from "../../assets/Resume12_27_2022.pdf";


function Resume() {
    return (
        <React.Fragment>
            <div className='container-fluid mx-auto bg-dark vh-height p-5'>
                <div className='row row-cols-1 row-cols-md-2 g-6'>
                    <div className='col mx-auto p-4'>
                        <div className="card border-info bg-dark p-3 align-items-center">
                            <h3 className='card-title text-center text-info mx'>Resume</h3>
                            <a className='link-info' href={ResumeLink} download>
                                <h5 className='text-info'>Download Resume</h5>
                            </a>

                            <h5 className="text-center text-info">Skills</h5>
                            <p className="text-center text-info">
                                Front End: <br/>
                                <br/>
                                - HTLM <br/>
                                - CSS <br/>
                                - JavaScript <br/>
                                - jQuery <br/>
                                - Responsive Design <br/>
                                - React <br/>
                                - BootStrap <br/>
                                <br/>
                                Back End: <br/>

                                - APIs <br/>
                                - Node <br/>
                                - Express <br/>
                                - MySQL, Sequelize <br/>
                                - MongoDB, Mongoose <br/>
                                - REST <br/>
                                - GraphQL <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Resume;