import React from 'react';
import './sectionsix-styles.scss';
import meal from '../../assets/meal.jpg'
import Button from '../Button/button-component'

const SectionSix = () => (
    <div className="section-six">
        <img className='image' src={meal} alt="reservation"/>
        <div className="reserve">
            <p className='ready'>Ready to make a reservation?</p>
            <Button>Book a table</Button>
        </div>
    </div>
);

export default SectionSix;