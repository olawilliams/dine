import React from 'react';
import './homepage-styles.scss';
import SectionOne from  '../../components/sectionone/sectionone-component';
import SectionTwo from '../../components/sectiontwo/sectiontwo-component';
import SectionThree from '../../components/sectionthree/sectionthree-component';
import SectionFour from '../../components/sectionfour/sectionfour-component';
import SectionFive from '../../components/sectionfive/sectionfive-component';
import SectionSix from '../../components/sectionsix/sectionsix-component'

const HomePage = () => (
    <div className="homepage">  
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
    </div>
);

export default HomePage;