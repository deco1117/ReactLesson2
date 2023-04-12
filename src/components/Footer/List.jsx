import React from 'react';
import "./index.scss"
import Facebook from '../../assets/images/fb.svg';
import Insta from '../../assets/images/insta.svg';
import Twit from '../../assets/images/twit.svg';
import In from '../../assets/images/in.svg';

const List = () => {
    return (
        <ul className='footerlink'>
            <li className='footerlist'><a href="#" className="links"><img src={Facebook} alt="Facebook" /></a></li>
            <li className='footerlist'><a href="#" className="links"><img src={Insta} alt="Insta" /></a></li>
            <li className='footerlist'><a href="#" className="links"><img src={Twit} alt="Twit" /></a></li>
            <li className='footerlist'><a href="#" className="links"><img src={In} alt="In" /></a></li>
        </ul>
    );
};

export default List;