import { useState } from "react";
import { Home, Products } from "./src/screens";
import {useFonts} from 'expo-font'


export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState('')


  return categorySelected ? (<Products category={categorySelected}/> 
  ) : (
  <Home setCategorySelected={setCategorySelected}/>
  )
  
}

{/* <Products category={'smartphones'} /> */}