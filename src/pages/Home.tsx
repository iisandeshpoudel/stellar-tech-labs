import React from 'react';
import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import Services from '../components/Services';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Services />
      <Stats />
    </main>
  );
};

export default Home;