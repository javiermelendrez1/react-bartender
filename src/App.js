import './App.css';
//import components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import DrinkCard from './components/DrinkCard/DrinkCard';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';
//import material ui component
import Container from '@mui/material/Container';
//import axios for api get
import axios from 'axios';
//styling for container 
const style = {
  paddingTop: `10px`,
  paddingBottom: '10px',
}
function App() {
  //create a state for the searched drinks
  const [search, setSearch] = useState([]); //by default it will be an array because it can hold multiple object 'drinks'
  //a state for when the search response returns null
  const [resultNull, setResultNull] = useState(false);
  //having this state will allow me to re use the drink and modal components 
  const [drinks, setDrinks] = useState([{}]); //initially this will be an empty array that will hold objects
  //use effect will be called initially on load, and every time the search state updates
  useEffect(() => {
    //create a function that will fetch the api
    //this api only fetches when user enter in search bar
    const fetchSearchApi = async (search) => {
      //try to fetch the api
      try {
        const searchResponse = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
        //if the result is null set the state to true
        if (searchResponse.data.drinks == null) {
          setDrinks([0, 1]);
          setResultNull(true);
        } else {
          //if the result is not null then just set the state of drinks 
          setDrinks(searchResponse.data.drinks);
        }
      } catch (err) {
        //if you get an error print it out to the console 
        console.log(err)
      }

    }
    //this function is for featured a random featured drink
    //only runs on initial load or if the string of search bar is empty when searched
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        if (response.data.drinks == null) {
          setDrinks([0, 1]);
        } else {
          setDrinks(response.data.drinks);
        }
      } catch (err) {
        console.log(err);
      }

    }
    //aside from the functions the functions that are called are depending on the state of the searchbar and response of it
    if (search == 0 && !resultNull) {
      fetchApi();
    } else if (search !== 0 && !resultNull) {
      fetchSearchApi(search);
    }

  }, [search])

  return (
    <div className="App">
      <Nav />
      {search.length == 0 && !resultNull ? <Hero /> : null}
      <SearchBar setSearch={setSearch} setResultNull={setResultNull} />
      <Container maxWidth='lg' sx={style}>
        {search.length == 0 && !resultNull ? <DrinkCard drinks={drinks} search={search} /> : null}
        {search.length !== 0 && !resultNull ? <DrinkCard drinks={drinks} search={search} /> : null}
        {resultNull ? <NotFound /> : null}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
