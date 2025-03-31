import React from 'react';
import Products from './product/Products';
import { Route, Routes } from 'react-router-dom';
import Register from './register/Register';
import Cart from './carts/Cart';
import Login from './login/Login';
import Home from './modernshop/Home';
import Categories from './categories/Categories';
import DetailProduct from './util/DetailProduct';

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/product' element={<Products />} /> 
      
      <Route path='/categories' element = {<Categories/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path ='/detail/:id' element ={<DetailProduct />}/>
    </Routes>
  );
};

export default Pages;
