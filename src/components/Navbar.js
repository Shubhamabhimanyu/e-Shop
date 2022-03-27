import React from 'react'
import {useCart} from 'react-use-cart';
import { Link } from 'react-router-dom';



export default function Navbar() {
    const{
        totalUniqueItems,
        
    
    }=useCart();
  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>e-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/products"}>Products</Link>
        </li>
       
      </ul>
<div className='m-1'>
<Link to={"/cart"}>
<img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/46/000000/external-cart-web-flaticons-lineal-color-flat-icons.png" alt=''/>
<span className="position-absolute  translate-middle badge rounded-pill bg-danger">
{totalUniqueItems}
    </span>
</Link>

</div>
    </div>
  </div>
</nav>


       

    </div>
  )
}
