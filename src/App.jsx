import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Recipes from './Components/Recipies/Recipes'

function App() {


  return (
    <div className='container mx-auto px-4'>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      
      
    </div>
  )
}

export default App
