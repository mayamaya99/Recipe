import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
//import NavBar from './NavBar';
import Footer from "./Footer";

//app_id = 159fc47c
//app-key = 4e272c328a090a45e4945962452db7b0

// const id = process.env.REACT_APP_ID;
// const key = process.env.REACT_APP_KEY;

//api : https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}
const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );

    const data = await response.json();
    // console.log(data);
    // console.log(data.hits);

    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // const getSearch = e => {
  // e.preventDefault();
  //setQuery(search);
  // setSear

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      {/* <NavBar/> */}
      <h2>
        GET RECIPES<i>!</i>
      </h2>
      <hr />
      <div className="div">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="   What are you looking for? "
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipes">
        {/* label */}
        {/* image */}
        {/* ingredient */}

        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.shareAs}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <div class="footer">
        <p>@ AhmedElmi 2021</p>
      </div>
    </div>
  );
};
export default App;
