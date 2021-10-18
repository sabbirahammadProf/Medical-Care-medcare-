import React from 'react';
import About from './About';
import HeroArea from './HeroArea';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;