import React from 'react';
import Foto from '../../assets/images/work1.png'
import './index.scss'

const WorkCard = (props) => {

    const {item:{image, title, year, prog, text}} = props;
    return (
        <div className='workcard'>
            <img src= {image} alt="foto" />
            <div className="workcard__end">
                <h4 className="workcard__end--title">
                    {title}
                </h4>
                <div className="workcard__end--info">
                    <p className="workcard__end--info-year">
                        {year}
                    </p>
                    <p className="workcard__end--info-prog">
                        {prog}
                    </p>
                </div>
                <p className="workcard__end--text">
                    {text}
                </p>

            </div>
        </div>
    );
};

export default WorkCard;