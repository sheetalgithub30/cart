import { useEffect, useState } from 'react'
import './App.css'

import data from './Data.js'
import Mobile from './Mobile.jsx'



function App() {
  const [product,setProduct] = useState([]);
  const [total,setTotal] = useState(0);
  const [cart,setCart] = useState(0);

  useEffect(() => {
  setProduct(data);
}, []);

useEffect(()=>{
  let sum = 0;
  let cart_item = 0;
    product.forEach((item) => {
      sum += item.price * item.quantity;
      cart_item +=item.quantity;
    });
    setTotal(Math.round(sum*100)/100);
    setCart(cart_item);
     
},[product])


   function increment(index){
      let temp =[...product];
      temp[index].quantity ++;
      setProduct(temp);
   }

   function decrement(index){
    let temp =[...product];
    if(temp[index].quantity > 1){
       temp[index].quantity --;
       setProduct(temp);
    }else{
      remove(index);
    }
   }

   function remove(index){
    let temp = product.filter((item, idx) => {
      if (idx != index) return item;
    });

    setProduct(temp);
   }

  return (
    <div id="main">
      <div id="navbar">
        <h1>Product Cart</h1>
        <p><i class="fa-solid fa-cart-plus"></i><span>{cart}</span> </p>
      </div>
      {product.length > 0 ? (
        <div>

      <div id="products">
        <h2>YOUR BAG</h2>
     {console.log()}
        {product.map((ele,index) =>{
          return <Mobile
           src={ele.src} 
           name={ele.name}
            price={ele.price}
             quantity={ele.quantity} 
             increment={()=>{increment(index)}}
             decrement={()=>{decrement(index)}}
             remove={()=>{remove(index)
             }}/>
        })}
      </div>
 
      <div id="bottom">
        <div id="hr"></div>
      <div id="sum">
        <h3>Total</h3>
        <h3 id="tot">${total}</h3>
      </div>
      <div id="clear">
        <button onClick={()=>{
          setProduct([])
        }}>Clear Cart</button>
      </div>
      </div>
      </div>
      ):(
        <div id="error">
        <p><b>Your Cart is EMPTY!</b></p>
        </div>
      )}

    </div>
  )
}

export default App
