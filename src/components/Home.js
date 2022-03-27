import React from 'react';
import { Link } from 'react-router-dom';
import xyz from './assets/images/img1.jpg';
export default function Home() {
  return (
      <>
    <div className="card bg-dark text-white" style={{position:"relative", textAlign:"center"}}>
  <img src={xyz} class="card-img" alt="..." style={{height:"500px",width:"100%"}} />
  <div style={{position:"absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}}>
      <h1>Welcome to e-Shop</h1>
      <h3>See Our Collection<Link to={"/products"}><img src="https://img.icons8.com/flat-round/48/000000/arrow--v1.png" alt='' /></Link></h3>
  </div>
</div> 
      </>
  )
}
