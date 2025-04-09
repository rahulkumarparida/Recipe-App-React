import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import CardDiv from "./Components/CardDiv";
import Conatiner from "./Components/Container";
import InnerContainer from "./Components/innerContainer";
import RecipeCont from "./Components/RecipeCont";

function App() {
  let [fetcheddata, setFetchdata] = useState([]);
  let [foodId, setFoodId] = useState("716406");
// console.log(`Food id set to ${foodId}`);

  return (
    <>
      <div className="flex justify-center flex-col">
        <SearchBar fetcheddata={fetcheddata} setFetchdata={setFetchdata} />
      </div>

      <Conatiner>
        <InnerContainer>
          <CardDiv
            fetcheddata={fetcheddata}
            foodId={foodId}
            setFoodId={setFoodId}
          />
        </InnerContainer>
        <InnerContainer>
          <RecipeCont foodId={foodId} />
        </InnerContainer>
      </Conatiner>
    </>
  );
}

export default App;
