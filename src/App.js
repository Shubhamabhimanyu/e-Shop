import React from "react";
import Products from './components/Products'
import Product from './components/Product'
import Cart from "./components/Cart";
import{
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import {CartProvider} from 'react-use-cart';
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return ( 

    <>
    <Router>
<CartProvider>
<Navbar/>
<Routes>
<Route  path="/" element={ <Home/> }></Route>
<Route  path="/products" element={ <Products/> }></Route>

<Route path="/product/:id" element={ <Product/> }></Route>

<Route  path="/cart" element={ <Cart/> }></Route>
</Routes>
</CartProvider>

    </Router>
    </>
  );
}

export default App;
