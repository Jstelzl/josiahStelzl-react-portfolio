import React, { Component } from 'react';


export default class index extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark vh-height">
                <div className="card mw-75 bg-dark mx-auto d-block">
                    <div className="card-body text-info">
                        <h5 className="card-title text-center">About Josiah Stelzl</h5>
                        <p className="card-text text-center">
                        My name is Josiah Stelzl. I am 19 years old and I am passionate about coding. <br/>
                        I first was intreaduced to the the coding world in 2019 when I began to teach myself Python. <br/>
                        After some time woking with python, I decieded to get into a full stack web development boot camp <br/>
                        through UNC Charlotte to recieve a certification and fullfill my dream of working in the coding industry. <br/>
                        I have almost 2 years of experience in the grocery industry, 1 year as a Brazilian Jiu Jitsu instructor. <br/>
                        Now I hope to become a senior software engineer in a professional setting.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}