import React from 'react';
import './sectiontwo-styles.scss';
import farm from '../../assets/farm.jpg'

const SectionTwo = () => (
    <div className="section-two">
        <div className="section-image">
            <span className="empty"></span>
            <img className='img' src={farm} alt=""/>
        </div>
        <div className="section-text">
            <h1 className="heading">
                Enjoyable place<br /> for all family
            </h1>
            <p className="text">
                Our relaxed surrounding makes dining with us a<br/> great experience for everyone.
                 We can even<br/> arrange a tour to our farm before your meal.
            </p>
        </div>
    </div>
);

export default SectionTwo;