import React from 'react';
import './sectionfive-styles.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import social from '../../assets/social.jpg'
const SectionFive = () => (
    <div className="section-five">
        <div className="section-image">
        <Tabs>
        <TabList>
      <Tab className='tab'>family</Tab>
      <Tab className='tab'>socail</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    1
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
     
    </TabPanel>
  </Tabs>
        </div>

        <div className="tabs">
        <Tabs>
    <TabList>
      <Tab className='tab'>family</Tab>
      <Tab className='tab'>socail</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    1a 11 12
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      1b
    </TabPanel>
  </Tabs>
        </div>
    </div>
);

export default SectionFive;