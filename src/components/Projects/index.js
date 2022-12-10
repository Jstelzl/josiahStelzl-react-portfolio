import React from 'react'
import bootstrap from 'bootstrap' 

function MyProjects({ project }) {
    const { title, link, repo } = project

    return (
        <div className='col'>
            <div className='card border-info'>    
                <div className="card-body">
                    <h5 className="card-title text-center text-info mx">{title}</h5>
                </div>
                <div className="card-body text-center btn-toolbar">
                    <a href={link} target="_blank" className="btn btn-outline-info mx-auto position-relative col-4">
                    <i className="bi bi-link" />
                    </a>
                    <a href={repo} target="_blank" className="btn btn-outline-info mx-auto position-relative col-4">
                    <i className="bi bi-github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
