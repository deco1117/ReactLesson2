import React from 'react';
import List from './List';
import "./index.scss";

const index = () => {
    return (
        <footer>
            <div className="container">
                <div className="wrapper">
                    <List />
                    <p className="copyright">
                        Copyright ©2020 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default index;