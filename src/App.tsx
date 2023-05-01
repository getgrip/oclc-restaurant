import { foods, Food } from "./types/Food";

export function App() {
  return (
    <div>
      {foods.map((food: Food) => (
        <div key={food.id}>
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <p>Price: ${food.price.toFixed(2)}</p>
          <p>Tags: {food.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
