import React from 'react';
import Card from '../Card/Card';
import './index.scss'
import { post } from '../../constants/post';

const index = () => {

   
    return (
        <div className='postes'>
            <div className="container">
                <div className="postes__top">
                    <h3 className="postes__top--title">
                        Recent posts
                    </h3>
                    <a href="#" className="postes__top--link">
                        View all
                    </a>
                </div>
                <div className="postes__wrapper">
                    {
                        post?.map((item)=>{
                            return <Card item={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default index;