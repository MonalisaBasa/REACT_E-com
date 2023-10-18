import React, {useState,useEffect,useMemo,useCallback} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title'
import Product from './Components/Body/product';
import Footer from './Components/Footer/Footer';
import CartProvider from './Components/Store/CartProvider';
import  {createBrowserRouter, RouterProvider,Routes,Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ProductDetailPage from './Components/Body/ProductDetail';

import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
  // ex:https://example.com/,here example.com is domain, path is the prt after the domain
  // path define where we need to show this page and element define component .
  {path:"/", element:<HomePage/>},
  {path:"/store",element:<Product/>},
  {path:"/products/:productId", element:<ProductDetailPage/>},
  {path:"/about", element: <AboutPage/>},
  {path:"/contact",element: <ContactPage/>}
 
]);
function App() {

 
  return (
    <>
    <RouterProvider router={router}/>
    {/* <CartProvider>
     <header>
      <Header/>
      <Title/>
     </header>
      <main>
        <Product/>
        <Cart/>
      </main>
      <footer>
        <Footer/>
      </footer>
      </CartProvider> */}
       {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<Product />} />
                <Route path="product-detail" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
       </Routes> */}
      {/* </RouterProvider> */}

    
    
    </>
  );
}

export default App;
