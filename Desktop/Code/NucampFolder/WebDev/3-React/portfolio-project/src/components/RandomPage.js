

export default function RandomPage( {foodsList} ) {

    const randomFood = foodsList[Math.floor(Math.random()* foodsList.length)]

    return (
        <div>
            <h5>You should eat...</h5>
            <h2 className="display-1"> {randomFood.name} </h2>
        </div>

    );
};