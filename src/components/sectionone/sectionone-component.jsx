import React from 'react';
import './sectionone-styles.scss';
import Button from '../Button/button-component'
import food from '../../assets/food-imge.png'

const SectionOne = () => (
    <div className="section-one">
        <div className="inner">

        
        <div className="dine-summary">
            <h1 className="dine-text">Exquisite dining <br /> since 1989</h1>
            <p className="summary">
                Experience our seasonal menu in beautiful
                <br /> country surroundings.
                Eat the freshest produce <br /> from the comfort of our farm house
            </p>
            <Button>Book a table</Button>
        </div>
        <div className="summary-image">
            <img className='food-image' src={food} alt=""/>
        </div>
        </div>
    </div>
);

export default SectionOne;