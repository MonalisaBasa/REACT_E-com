import React, {useState,useEffect,useMemo,useCallback, useContext} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title'
import Product from './Components/Body/product';
import Footer from './Components/Footer/Footer';
import CartProvider from './Components/Store/CartProvider';
import  {createBrowserRouter, BrowserRouter,RouterProvider,Routes,Route,Navigate } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import ProductDetailPage from './Components/Body/ProductDetail';

import Cart from './Components/Cart/Cart';
import StorePage from './Pages/StorePage';
import AuthContext from './Components/Store/AuthContext';
import AuthForm from './Login pages/AuthForm';
// const router = createBrowserRouter([
//   // ex:https://example.com/,here example.com is domain, path is the prt after the domain
//   // path define where we need to show this page and element define component .
//   {path:"/", element:<HomePage/>},
//   {path:"/store",element:<StorePage/>},
//   {path:"/products/:productId", element:<ProductDetailPage/>},
//   {path:"/about", element: <AboutPage/>},
//   {path:"/contact",element: <ContactPage/>},
//   {path:"/auth",element: <AuthForm/>}
 
// ]);
function App() {
  const authCtx = useContext(AuthContext);

 
  return (
    // <>
    // <RouterProvider router={router}/>
   // </>
  //  <CartProvider>
  //  <Header>
  //   <Header/>
  //   <Title/>
  //  </Header>
  //  <main>
  //   <Product/>
  //  </main>
  //  <Footer>
  //   <Footer/>
  //  </Footer>
  //  </CartProvider> 
  <BrowserRouter>
  <CartProvider>
    <Routes>
      <Route path ="/" Component={AuthForm} exact />
      <Route path ="/auth" Component={AuthForm}  />
      <Route path ="/about" Component={AboutPage} />
      <Route path ="/store"
      element={
        authCtx.isLoggedIn ? (
          <StorePage/>
        ):(
          <Navigate to="/auth" replace></Navigate>
        )
      }
      />
      <Route path="/contact" Component={ContactPage}/>
      <Route path="/Homepage" Component={HomePage}/>
    </Routes>
  </CartProvider>
  </BrowserRouter>
  );
}

export default App;
