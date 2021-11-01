import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;