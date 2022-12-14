import React from 'react'
import bootstrap from 'bootstrap' 

function MyProjects({ project }) {
    const { title, link, repo, image } = project

    return (
        <div className='col-6'>
            <div className="card">
                
                <div className='card'>    
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
                <img src={image} className="card-img-top" alt="..."/>
            </div>
        </div>
    );
}

export default MyProjects;
