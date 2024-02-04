import { useState } from "react"
import FoodCard from "./FoodCard"

export default function HomePage( {foodsList} ) {
    const [categoryFilter, setCategoryFilter] = useState("All")

    let filteredFoods
    if (categoryFilter === "All") {
        filteredFoods = foodsList
    } else {
        filteredFoods = foodsList.filter(f => f.catagory === categoryFilter)
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("All")}>All</button>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("meal")}>meal</button>
                <button className="btn btn-primary" onClick={() => setCategoryFilter("greens")}>greens</button>
            </div>
            {filteredFoods.map(f => <FoodCard key={f.id} id={f.id} {...f} />)}
        </div>

    );
};