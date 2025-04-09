

export default function FoodList({food}) {
    
 return   <div className="ingredients border-1 rounded text-amber-800 p-2">
          <p className="font-bold text-3xl p-1">Ingredients : </p>
          {food.extendedIngredients.map((ele, idx) => {
            return (
              <div key={idx} className="bg-amber-200 font-bold font-[cursive] text-xl pl-4 flex items-center p-3">
              {idx + 1}.   <img src={`https://img.spoonacular.com/ingredients_100x100/${ele.image}`} alt="Not Availiable" className="h-30 pt-3 pl-1 ml-1 " />
                <h3 className=" px-5 rounded text-amber-800 font-bold font-[cursive] text-xl p-2">
                  {ele.nameClean} 
                </h3>
              </div>
            );
          })}
        </div>
      
}