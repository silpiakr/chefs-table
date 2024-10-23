import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import OurRecipes from './Components/ourRecipies/ourRecipes'
import Recipes from './Components/Recipes/Recipes'
import Sidebar from './Components/Sidebar/Sidebar'
import { useState } from 'react'

function App() {
  const [cookRecipe, setCookRecipe] = useState([]);

  const handleCookRecipe = recipe => {
    const isExist = cookRecipe.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    
    if(!isExist){
      setCookRecipe([...cookRecipe, recipe]);
    }
    else{
      alert('Recipe already cooked');
    }
    
  }

  console.log(cookRecipe)

  return (
    <div className='container mx-auto px-4'>
      {/* header section */}
      <Header></Header>
      {/* banner ssection */}
      <Banner></Banner>
      {/* our recipes */}
      <OurRecipes></OurRecipes>
      <section className='flex flex-col md:flex-row gap-6'>
        {/* card section */}
        <Recipes handleCookRecipe={handleCookRecipe}></Recipes>
        {/* sidebar section */}
        <Sidebar cookRecipe={cookRecipe}></Sidebar>
      </section>

      
      
    </div>
  )
}

export default App
