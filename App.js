
import {useFonts} from 'expo-font'
import { useState } from 'react';
import fonts from "./src/global/fonts";
import StackNavigator from './src/navegation/StackNavegator';
import { Home } from './src/screens';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)


  if (!fontsLoaded){
    return null
  }

  return <StackNavigator />

  // Agrego el código del renderizado condicional que tenía anteriormente 

  // const [categorySelected, categorySelected] = useState('')

  // return categorySelected ?(
    // <Products category={categorySelected}
    // ) : (
    //   <Home setCategorySelected = {categorySelected}/>
    //   )
}

