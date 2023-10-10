import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title'
import Product from './Components/Body/product';
import Footer from './Components/Footer/Footer';
import CartProvider from './Components/Store/CartProvider';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import MoviesList from './Movie/MoviesList';
// import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
  // ex:https://example.com/,here example.com is domain, path is the prt after the domain
  // path define where we need to show this page and element define component .
  {path:"/", element:<HomePage/>},
  // {path:"/store",element:<StorePage/>},
  {path:"/about", element: <AboutPage/>},
 
])
function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState([false]);

  async function fetchMoviesHandler(){
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/')
   const data = await response.json();
    // .then((response) => {
    //   return response.json();
    // })
   
      const transformedMovies = data.results.map((movieData) => {
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releasedate:movieData.release_date
        }
      });
     setMovies(data.results);
     setIsLoading(false);
   
  }
 
  return (
    // <RouterProvider router={router}/>
    <>
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
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>

      </section>
      <section>
        {!isLoading && <MoviesList movies={movies}/>}
        {isLoading && <p>Loading...</p>}
      </section>
    
    </>
  );
}

export default App;
