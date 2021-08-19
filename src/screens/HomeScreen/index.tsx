import React, { ReactElement } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

function HomeScreen(): ReactElement {
  return (
    <div className="home-screen">
      <Header />
      <main className="main-content">Content</main>
      <Footer />
    </div>
  );
}

export default HomeScreen;
