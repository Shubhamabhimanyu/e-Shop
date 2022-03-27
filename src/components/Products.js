import React from 'react'
import { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom';


export default function Products() {
 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{textAlign:"center",alignItems:"center", display:"flex", justifyContent:"center",width:"100%",height:"100vh"}}>
    <div className="spinner-border" role="status" >
    </div>
</div>;
  } else {
    return (
     
      <div className='container' style={{padding:"10px"}}>
        <h2 className='text-center my-2'>Our New Collections</h2>
        <div className='row' >
     {items.map(item=>(
<div className='col-md-3 mb-4' key={item.id} >
<div className="card h-100 text-center" >
  <img src={item.image} className="card-img-top" alt="..."style={{widh:"100%",height:"250px"}} />
  <div className="card-body">
    <h5 className="card-title mb-0">{item.title.substring(0,12)}...</h5>
    <p className="card-text">${item.price}</p>
    <Link to={`/product/${item.id}`} className="btn btn-primary">Buy</Link>
  </div>
</div>
  </div> 
     ))};
      </div>
      </div>
      
    )
  }
}
