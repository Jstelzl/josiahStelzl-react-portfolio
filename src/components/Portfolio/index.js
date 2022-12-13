import React from 'react';
import MyProjects from '../Projects';
import HotShots from '../../assets/photos/hot-shots.png';
import HeaderImage from '../../assets/photos/header-image.jpeg';
import bootstrap from "bootstrap";

const accomplishments = [
    {
        image: HotShots,
        title: 'Hot-Shots',
        link: 'https://boiling-caverns-86509.herokuapp.com/',
        repo: 'https://github.com/APetersen11/Hot-Shots',
    },
];

function MyPortfolio() {

    return (
        < React.Fragment >
            <div className='container-fluid'>
                <img className='img-fluid mw-75 mx-auto d-block' src={HeaderImage} />
            </div>
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
