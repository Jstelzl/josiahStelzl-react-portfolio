import React from 'react';
import MyProjects from '../Projects';
import HotShots from '../../assets/photos/hot-shots.png';
import GitItDone from '../../assets/photos/git-it-done.png';
import BoozeBuddy from '../../assets/photos/booze-buddy.webp';
import CheckLogo from '../../assets/photos/check-logo-nav.png';
import TaskMaster from '../../assets/photos/taskmaster.jpeg';
import CodeGeek from '../../assets/photos/code-geek.webp';
//import HeaderImage from '../../assets/photos/header-image.jpeg';
import bootstrap from "bootstrap";

const accomplishments = [
    {
        title: 'Hot Shots',
        link: 'https://boiling-caverns-86509.herokuapp.com/',
        repo: 'https://github.com/APetersen11/Hot-Shots',
        image: HotShots,
    },
    {
        title: 'Git It Done',
        link: 'https://jstelzl.github.io/git-it-done/',
        repo: 'https://github.com/Jstelzl/git-it-done',
        image: GitItDone,
    },
    {
        title: 'Booze Buddy',
        link: 'https://raenique27.github.io/spirit-heroes/',
        repo: 'https://github.com/Raenique27/spirit-heroes',
        image: BoozeBuddy,
    },
    {
        title: 'ARIJ',
        link: '',
        repo: 'https://github.com/Jstelzl/arij',
        image: CheckLogo,
    },
    {
        title: 'Task Master Pro',
        link: 'https://jstelzl.github.io/taskmaster-pro/',
        repo: 'https://github.com/Jstelzl/taskmaster-pro',
        image: TaskMaster,
    },
    {
        title: 'Code Geek',
        link: 'https://nameless-lowlands-33351.herokuapp.com/',
        repo: 'https://github.com/Jstelzl/Code-Geek',
        image: CodeGeek,
    }
];

function MyPortfolio() {

    return (
        < React.Fragment >
            {/* <div className='container-fluid'>
                <img className='img-fluid mw-75 mx-auto d-block' src={HeaderImage} />
            </div> */}
            <div className='container vh-height p-5'>
                <div className='row row-col-1 row-cols-md g-4'>
                    {accomplishments.map((proj) => (
                        <MyProjects project={proj} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyPortfolio;
