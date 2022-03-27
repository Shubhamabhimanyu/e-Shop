import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart';


export default function Product() {
    const {id}=useParams();
    const{addItem}=useCart();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([id]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
      
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[id])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{textAlign:"center",alignItems:"center", display:"flex", justifyContent:"center",width:"100%",height:"100vh"}}>
    <div className="spinner-border" role="status" >
    </div>
</div>;
  } else {
  return (
    <>
<div className='container'>
     <div className='row'>

    <div className='col-md-6'>
    <img src={items.image} alt=""style={{width:"400px",height:"400px"}}></img>
    </div>
     <div className='col-md-6' >
     <h4 > {items.category}</h4> 
      <h1>{items.title}</h1> 
       <h3 className='my-3'>${items.price}</h3>
      <p>{items.description}</p> 
     
       <button className='btn btn-success m-2' onClick={()=>addItem(items) (alert("Added to cart"))} >Add to cart</button>
      <Link to={"/cart"} ><button className='btn btn-primary m-2'>GO to Cart</button></Link>
     </div>
    </div>
</div>

    </>
  )
  }
}