export default function BasicInfo({food}){

    return     <>
    <div className="  rounded text-amber-800 p-2 flex flex-col items-center">
   <h1 className=" text-amber-800 font-[cursive] text-3xl mb-3 ">
     Information
   </h1>
   <h1 className="text-amber-700 font-[cursive] text-xl mb-3 ">
     {food.title}
   </h1>
   <img
     src={food.image}
     alt="Image not availiable"
     className="h-30  w-150 lg:h-100 rounded-2xl shadow-lg"
   />
 </div>
 <div className="smallinfo bg-amber-200 my-4 px-4 rounded shadow-sm shadow-amber-300 font-bold font-[cursive] text-lg">
   <span className="vegetarian text-gray-700">
     Food : {food.vegetarian ? " 🟢" : " 🔴"}
   </span>
   <br />
   <span>Time Taken : {food.readyInMinutes} Min's</span> <br />
   <span>Can Serve : {food.servings} people at once</span>
   <br />
   <span>Price : ${(food.pricePerServing / 100).toFixed(3)}</span>
   <br />
 </div>

   </>
}