import React from 'react';
import Card from '../Card/Card';
import './index.scss'

const index = () => {

    let post = [
        {
            "id": 1,
            "title": 'Making a design system from scratch',
            "date": "12 Feb 2020  |  Design, Pattern",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },

        {
            "id": 2,
            "title": 'Creating pixel perfect icons in Figma',
            "date": "12 Feb 2020  |  Figma, Icon Design",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]
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