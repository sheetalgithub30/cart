import './Mobile.css'
function Mobile({src,name,price,quantity,increment,decrement,remove}) {
  return (
    <div id="product">
        <img src={src}></img>
         <div id="about">
           <p id="name">{name}</p>
           <p>${price}</p>
           <button id="remove" onClick={remove}>REMOVE</button>
         </div>
         <div id="count">
            <button onClick={increment}> <i class="fa-solid fa-chevron-up"></i></button>
            <h3>{quantity}</h3>
            <button onClick={decrement}><i class="fa-solid fa-chevron-down"></i></button>
         </div> 
    </div>
  );
}

export default Mobile