import React, {useState,useEffect} from 'react';
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
 
]);
function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[error,setError] = useState(null);
  const [cancelRetry,setCancelRetry] = useState(false);

  useEffect(() => {
    // Fetch movies when the component mounts
    fetchMoviesHandler();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  async function fetchMoviesHandler(retryCount = 3) {
    setIsLoading(true);
    setError(null);
    setCancelRetry(false);
   
    try{
    const response = await fetch('https://swapi.dev/api/films/');
    
   const data = await response.json();
   console.log(data)

   if(!response.ok){
    throw new Error('Something went wrong...Retrying!');
   }
    
      const transformedMovies = data.results.map((movieData) => {
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      });
      console.log(transformedMovies);
     setMovies(transformedMovies);
     setIsLoading(false);
    }
    catch(error){
      console.log(error);
      if(cancelRetry){
        return;
      }
      setError(error.message);

      if(retryCount > 0){
        setTimeout(() => fetchMoviesHandler(retryCount -1),5000)
      }else{
        console.log('Maximum retry attempts reached');
        setIsLoading(false);
      } 
   }
  };

  const handleCancelRetry = () =>{
    setCancelRetry(true);
  }

  

  let content = <p>Found no movies </p>

  if(movies.length > 0 ){
    content = <MoviesList movies={movies}/>
  }
  console.log('Render Content:', content);

  if (error) {
    content = (
      <>
    <p>{error}</p>
    <button onClick = {handleCancelRetry}>Cancel Retry</button>
    </>
    );
  }

  if(isLoading){
    content = <p>Loading...</p>
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
        {/* <button onClick={fetchMoviesHandler}>Fetch Movies</button> */}

      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        {!isLoading && error && <p>{error} </p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    
    </>
  );
}

export default App;
