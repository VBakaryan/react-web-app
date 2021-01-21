import React from 'react'

import Layout from './components/Layout/Layout';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Products from './containers/Products/Products';
import Info from './components/Info/Info';
import Landing from './containers/Landing/Landing';

import './App.scss';

function App() {
  return (
   
     <div className="App">
      <Header />
      <Layout>
        <Landing />
        <Products />
        <Info />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
