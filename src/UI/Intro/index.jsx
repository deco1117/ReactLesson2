import React from 'react';
import Foto from '../../assets/images/avatar.png';
import './index.scss';
const index = () => {
    return (
        <>
            <div className="container">
                <div className="intro">
                    <div className="intro__start">
                        <h1 className="intro__start--title">
                            Hi, I am John,
                            Creative Technologist
                        </h1>
                        <p className="intro__start--text">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="intro__start--btn">
                        Download Resume
                        </button>
                    </div>
                    <div className="intro__end">
                        <img src={Foto} alt="foto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;