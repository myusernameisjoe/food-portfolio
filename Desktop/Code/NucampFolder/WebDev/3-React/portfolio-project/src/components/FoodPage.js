import { useParams } from "react-router-dom";

export default function FoodPage( {foodsList} ) {

    let {foodId} = useParams()
    foodId = parseInt(foodId)

    const food = foodsList.find(f => f.id === foodId)

    if(!food) {
        return <h2>food not found</h2>
    }

    return (
        <div>
            <h3> { food.name }</h3>
            <p>{ food.catagory }</p>
            <p>{ food.calories }</p>
        </div>

    );
};