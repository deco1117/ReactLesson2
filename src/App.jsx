import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer';
import Intro from './UI/Intro';
import Postes from './UI/Postes';
import Work from './UI/Work';

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Intro/>
        <Postes/>
        <Work/>
      </main>
      <Footer />
    </>
  );
};

export default App;