import React, { useState } from 'react'
import Project from '../Projects';
import bootstrap from 'bootstrap'

function myPortfolio() {
    const [projects] = useState([{}])

    return (
        <div>
            <div className='projectContainer'>
                {projects.map((project) => (
                    < Project project={Project} />
                ))}
            </div>
        </div>
    );
}

export default myPortfolio;
