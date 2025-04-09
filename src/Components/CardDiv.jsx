import Card from "./Card";

export default function CardDiv({ fetcheddata , setFoodId }) {
  return <Card fetcheddata={fetcheddata} setFoodId={setFoodId} />;
}
