import Card from "./Card";

export default function CardList({ shopItems }) {
  return (
    <div className='card-grid'>
      {shopItems.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
}
