
function FoodCard(props) {
    return (
        <div className='bg-light border p-4 m-2'>
          <h1>{props.food.name}</h1>
          <p>Protein: {props.food.protein}</p>
          <p>Carbs: {props.food.carbs}</p>
          <p>Fat: {props.food.fat}</p>
          <p>Calories: {props.food.calories}</p>
        </div>
    )

};

export default FoodCard;

// if you export default you will not use curly braces when importing

// function FoodCard(props)
// to be able to access the information from the parent component within this child component, we need to pass in the props object as an argument to the function
// props is the gateway connector between the parent and child component (specific, precise, connector tunnels)
// the parent component can share specific parts of its local scope with the child component
// this allows controlled access to shared data
// by encapsulating data within local scopres and selectively passing it via props, we can maintain data integrity and avoid unintended modifications to shared data
// we use this to call individual properties from the object (like props.food.name)


// "this is your playground and these are your toys"