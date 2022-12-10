import React from 'react';
import MyProjects from '../Projects';
//import HotShots from '../../assets/photos/hot-shots.png'
import bootstrap from "bootstrap";

const accomplishments = [
    {
        //image: HotShots,
        title: 'Hot-Shots',
        link: 'https://boiling-caverns-86509.herokuapp.com/',
        repo: 'https://github.com/APetersen11/Hot-Shots',
    },
];

function MyPortfolio() {

    return (
        < React.Fragment >
            <div className='container'>
                <div className='row row-col-1 row-cols-md g-4'>
                    {accomplishments.map((proj) => (
                        <MyProjects item={proj} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyPortfolio;
