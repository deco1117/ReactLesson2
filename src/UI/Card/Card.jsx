import React from 'react';
import './index.scss';

const Card = (props) => {

    const {item:{title, date, text}} = props;

    return (
        <div className='card'>
            <h2 className="card__title">
                {title}
            </h2>
            <p className="card__info">
                {date}
            </p>
            <p className="card__text">
               {text}
            </p>
        </div>
    );
};

export default Card;