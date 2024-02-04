# state
import { useState } from "react"
place to store data where if that data changes the component will rerender
const [state, setState] = useState(initialValue)


# map()

function App() {
  return (
    <div>
      {foodList.map( f => <FoodCard food = {f} />)}
      
    </div>
  );
}

itterate over each object in the foodList array and apply a callback function to each object
"f" represents each object in the array
transform each object into JSX elements (**the FoodCard component**)
each FoodCard component will have a **prop of food** that is equal to the object in the array


# routing
terminal
- install via npm install react-router-dom

index.js
- wrap app component in BrowserRouter component

import { Routes, Route } from 'react-router-dom'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

function App() {
    return (
        <>
        <h1>My App </h1>
        <Routes>
            <Route path='/' element={<FirstPage/>} />
            <Route path='/secondpage' element={<SecondPage/>} />
        </Routes>
        </>

    );
};

# URL parameter & userParams()

 <Route path='/foods/:foodId' element={<FoodPage foodsList={foodsList} />}/>
 - put a colon with what I wanted (aka :foodId)
 - enables us to in our URL have dynamic routing that matches the path in the address bar

 can deconstruct multiple with const { ethnicity, foodId } = useParams()
 useParams will return a string so if you want a number you have to parseInt
