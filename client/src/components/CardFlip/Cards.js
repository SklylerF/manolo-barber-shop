import "./cards.css";
export default function Cards({ shopItems }) {
  return (
    <div>
      <div className='item-shop-container'>
        <h2>SHOP</h2>
        <div className='card-container'>
          {shopItems.map((item) => {
            return (
              <div className='containers'>
                <div className='card'>
                  <div className='card-front'>
                    <h2 className='item-name-price'>
                      {item.name} : ${item.price}
                    </h2>
                    <img src={item.image}></img>
                  </div>
                  <button className='add-to-cart'>ADD TO CART</button>
                  <div className='card-back'></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
