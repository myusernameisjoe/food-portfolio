import FoodCard from "./FoodCard"

const foodList = [
  {
    id: 0,
    name: "pizza",
    protein: 15,
    carbs: 30,
    fat: 10,
    calories: 300,
  },
  {
    id: 1,
    name: "burger",
    protein: 20,
    carbs: 40,
    fat: 15,
    calories: 400,
  },
  {
    id: 2,
    name: "salad",
    protein: 10,
    carbs: 20,
    fat: 5,
    calories: 200,
  },
];


function App() {
  return (
    <div>
      {foodList.map( f => <FoodCard food = {f} />)}
      
    </div>
  );
}

export default App;



// .map()
// itterate over each object in the foodList array and apply a callback function to each object
// "f" represents each object in the array
// transform each object into JSX elements (**the FoodCard component**)
// each FoodCard component will have a **prop of food** that is equal to the object in the array

