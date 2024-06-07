import './Mobile.css'
function Mobile({src,name,price,quantity,increment,decrement,remove}) {
  return (
    <div id="product">
        <img src={src}></img>
         <div id="about">
           <p id="name">{name}</p>
           <p>${price}</p>
           <button onClick={remove}>REMOVE</button>
         </div>
         <div>
            <button onClick={decrement}> ⬆️</button>
            <h3>{quantity}</h3>
            <button onClick={increment}>⬇️</button>
         </div> 
    </div>
  );
}

export default Mobile