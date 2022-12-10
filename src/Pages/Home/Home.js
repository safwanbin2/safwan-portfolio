import React from 'react';
import Header from './Header';
import PortfolioSkills from './PortfolioSkills';
import Resume from './Resume';
import ShortBio from './ShortBio';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <ShortBio></ShortBio>
          <Resume></Resume>
          <PortfolioSkills></PortfolioSkills>
        </div>
    );
};

export default Home;