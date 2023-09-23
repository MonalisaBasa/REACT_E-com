import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title'
import Product from './Components/Body/product';
import Footer from './Components/Footer/Footer';
// import ProductsItem from './Components/Body/productsItem';


function App() {
  return (
    <>
     <header>
      <Header/>
      <Title/>
     </header>
      <main>
        <Product/>
      </main>
      <footer>
        <Footer/>
      </footer>
    
    </>
  );
}

export default App;
