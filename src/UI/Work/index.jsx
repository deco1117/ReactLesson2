import React from 'react';
import './index.scss';
import Work1 from '../../assets/images/work1.png';
import Work2 from '../../assets/images/work2.png';
import Work3 from '../../assets/images/work3.png';
import WorkCard from '../WorkCard/WorkCard';


const index = () => {

    const workBd = [
        {
            "id": 1,  
            "imges": Work1 ,
            "title": "Designing Dashboards",
            "year": "2020",
            "prog": "Dashboard",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            "id": 2,
            "imges": Work2,
            "title": "Vibrant Portraits of 2020",
            "year": "2018",
            "prog": "Illustration",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            "id": 3,
            "imges": Work3,
            "title": "36 Days of Malayalam type",
            "year": "2018",
            "prog": "Typography",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]
    
    return (
        <div className='container'>
            <div className="work">
                <h4 className="work__title">
                    Featured works
                </h4>
                <div className="work__wrapper">
                    {
                        workBd?.map((item) => {
                            return <WorkCard item={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default index;