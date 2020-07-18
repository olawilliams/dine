import React from 'react';
import './sectionfour-styles.scss';
import salmon from '../../assets/salmon.jpg';
import filletMignon from '../../assets/fillet-mignon.jpg';
import fruitChocolate from '../../assets/fruit-chocolate.jpg';

const SectionFour = () => (
    <div className="section-four">
        <div className="section-text">
            <h1 className="heading">
                A few highlights<br /> from our menu
            </h1>
            <p className="text">
                We cater for all dietary requirements, but here's
                <br/> a glimpse of some of our diner's favorite.<br/> Our menu is revamped every season
            </p>
        </div>

        <div className="highlights">
            <div className="menu">
                <img className="menu-image" src={salmon} alt="salmon-fillet"/>
                <div className="menu-text">
                    <p className="menu-name">Seared Salmon Fillet</p>
                    <p className="menu--details">Our locally sourced salmon served <br/>with a refreshing buckwheat summer salad.</p>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <img className="menu-image"  src={filletMignon} alt="fillet-mignon"/>
                
                <div className="menu-text">
                    <p className="menu-name">Rosemary Filet Mignon</p>
                    <p className="menu--details">Our prime beef served to your taste with <br/>a delicious choice of seasonal sides.</p>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <img className="menu-image"  src={fruitChocolate} alt="fruit-chocolate"/>
                
                <div className="menu-text">
                    <p className="menu-name">Summer Fruit Chocolate Mousse</p>
                    <p className="menu--details">Creamy mousse combined with summer<br/> fruits and dark chocolate shavings.</p>
                </div>
            </div>
        </div>
    </div>
);

export default SectionFour;