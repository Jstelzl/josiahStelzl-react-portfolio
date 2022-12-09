import React from 'react'
import bootstrap from 'bootstrap' 

function myProjects({ projects }) {
    const { title, link } = projects

    return (
        <div>
            <a href={link}>
                <h3>{title}</h3>
            </a>
        </div>
    )
}

export default myProjects;
