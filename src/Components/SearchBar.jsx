import { useEffect, useState } from "react";
import CardDiv from "./CardDiv";
const URL ="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "0dd4464f2d5b46f19fdfaafb82fecc24"

export default function SearchBar({fetcheddata , setFetchdata}) {
  let [input, setInput] = useState("");
  let [name, setName] = useState('');
 
 
  function handleSumbit(e) {
    setName(input);
   
    setInput("")
    e.preventDefault()
  }
  useEffect(()=>{
   async function fetchData(){
        const res =await fetch(`${URL}?query=${name}&apiKey=${API_KEY}`)
        const data =await res.json();
        // console.log(data);

        setFetchdata(data.results)
       
    }
    fetchData()
  
    console.log(fetcheddata , " data is fetched");
   
    
}, [input])

  return (
<>
<div className="bg-yellow-200 h-20 p-3 mx-10  md:w-150 my-5 flex items-center justify-center rounded-xl ">
      <form onSubmit={handleSumbit} >
        <input
        className="border-0 rounded-xl w-40 h-8 bg-amber-300 p-4 text-black-500 font-serif lg:w-90 outline-none"
          type="text"
          value={input}
          placeholder="Enter the Food Name"
          onChange={(e) => {
            setInput(e.target.value);
            e.preventDefault();
          }}
        />
        <button type="sumbit" className="border-1 mx-1 p-1 w-15 text-xs xl:border-3 ,mx-2,p-1 rounded-xl hover:bg-amber-400 hover:text-white transition all ease-in-out duration-300 ">Sumbit</button>
      </form>
     
    </div>
    
</>
  );
}

