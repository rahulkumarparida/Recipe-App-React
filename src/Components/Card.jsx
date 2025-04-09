
export default function Card({ fetcheddata, setFoodId , foodId }) {

  function handleClickRecipe(id){
    // console.log("handleCLick ",id);
    setFoodId(id);
  }




 

  return (
    <div className="w-90 overflow-hidden">
      {fetcheddata.map((food) => {
        return (
          <div key={food.id}>
            <div className="shadow-sm shadow-amber-700 h-85 w-70 bg-yellow-200 font-[cursive] m-3 rounded-xl p-2 ">
              <img
                src={food.image}
                alt="Food image is not availiable"
                className="h-50 rounded-xl p-1 "
              />
              <h1 className="p-3 text-xs font-bold">{food.title}</h1>
              <button
                key={food.id}
                onClick={() => {
                 let fid = food.id
                  handleClickRecipe(fid)
                }}
                className="border-1 p-1 mx-3 rounded-xl border-yellow-500 bg-amber-600"
              >
                Recipe
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
