import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeatureGrid from '../components/Home/FeatureGrid';
import WhyChooseCoolAir from '../components/Home/WhyChooseCoolAir';
import Specifications from '../components/Home/Specifications';
import ComfortSection from '../components/Home/ComfortSection';
import HappinessSection from '../components/Home/HappinessSection';
import ReviewsSection from '../components/Home/ReviewsSection';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <FeatureGrid/>
            <WhyChooseCoolAir/>
            <ComfortSection/>
            <Specifications/>
            <HappinessSection/>
            <ReviewsSection/>
        </div>
    );
};

export default Home;