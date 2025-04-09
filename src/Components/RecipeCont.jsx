import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import FoodInstruction from "./FoodInstruction";
import BasicInfo from "./BasicInfo";

export default function RecipeCont({ foodId }) {
  let [food, setFood] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  const API_KEY = "0dd4464f2d5b46f19fdfaafb82fecc24";

  useEffect(() => {
    async function GetRecipeData() {
      const result = await fetch(
        `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await result.json();

      console.log("data found ", foodId, " is ", data);
      setFood(data);
      setIsLoading(false);
    }
    GetRecipeData();
  }, [foodId]);

  return (
    <>
          <div >
       {
        isLoading ? (
         <p   className="font-bold font-[cursive] text-2xl ">Loading...</p>
        ):(
          <BasicInfo food={food} />
        )
       }
      <br />
        {isLoading ? (
            <p  className="font-bold font-[cursive] text-2xl ">Loading...</p>
        ) : (
         <FoodList food={food} />
        )} <br />
        {isLoading ? (
             <p className="font-bold font-[cursive] text-2xl ">Loading...</p>
        ) : (
         <FoodInstruction food={food} />
        )}
      </div>
    </>
  );
}
