export default function FoodInstruction({food}){

    return  <div className="instruction border-1 rounded text-amber-800 p-2 mt-2">
    <p className="font-bold text-2xl">Instructions : </p>
    {food.analyzedInstructions[0].steps.map((ele, idx) => {
      return (
        <div key={idx}>
          <h1 className="bg-amber-200 p-2 text-amber-700">
            <p className=" bg-amber-400 font-bold px-2">
              Step {idx + 1} :
            </p>
            <li>{ele.step}</li>
          </h1>
        </div>
      );
    })}
  </div>
}