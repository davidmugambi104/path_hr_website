import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Values } from './components/sections/Values';
import { Services } from './components/sections/Services';
import { Approach } from './components/sections/Approach';
import { WhyChoose } from './components/sections/WhyChoose';
import { Team } from './components/sections/Team';
import { Clients } from './components/sections/Clients';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Approach />
        <WhyChoose />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;