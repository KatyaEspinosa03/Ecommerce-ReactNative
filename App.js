import { useState } from "react";
import { Home, Products, Details } from "./src/screens";
import {useFonts} from 'expo-font'
import fonts from "./src/global/fonts";


export default function App() {

  const [fontsLoaded] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState('')

  const [productSelected, setProductSelected] = useState()

  if (!fontsLoaded){
    return null
  }

  return productSelected ? (
    <Details product={productSelected}/>
  ) : categorySelected ? (
    <Products 
    category={categorySelected} 
    setProductSelected={setProductSelected} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )

  
}

  // return categorySelected ? (<Products category={categorySelected}/> 
  // ) : (
  // <Home setCategorySelected={setCategorySelected}/>
  // )