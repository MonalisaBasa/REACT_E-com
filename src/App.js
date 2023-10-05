import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title'
import Product from './Components/Body/product';
import Footer from './Components/Footer/Footer';
import CartProvider from './Components/Store/CartProvider';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
// import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
  // ex:https://example.com/,here example.com is domain, path is the prt after the domain
  // path define where we need to show this page and element define component .
  {path:'/', element: <AboutPage/>},
  {}
])
function App() {
 
  return (
    // <>
    <RouterProvider router={router}/>
    // <CartProvider>
    //  <header>
    //   <Header/>
    //   <Title/>
    //  </header>
    //   <main>
    //     <Product/>
    //     {/* <Cart/> */}
    //   </main>
    //   <footer>
    //     <Footer/>
    //   </footer>
    //   </CartProvider>
    
    // </>
  );
}

export default App;
