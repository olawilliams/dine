import React from 'react';
import './sectionthree-styles.scss';
import localFood from '../../assets/local-food.jpg'

const SectionThree= () => (
    <div className="section-three">
        <div className="section-text">
            <h1 className="heading">
                The most locally<br /> sourced food
            </h1>
            <p className="text">
                All our ingredient come from our farm or <br/> local fishery.So you can be sure that you are <br/>
                eating the freshest, most sustainable food.
                 We can even<br/> arrange a tour to our farm before your meal.
            </p>
        </div>
        <div className="section-image">
            <span className="empty"></span>
            <img className='img' src={localFood} alt=""/>
        </div>
    </div>
);

export default SectionThree;