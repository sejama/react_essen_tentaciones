import './styles.css';
import React from 'react';
import { ItemListContainer } from './components/ItemListcontainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';

function App() {
  

  return ( 
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/" element={ <ItemListContainer greeting= "Juani Greco"/>} />
          <Route path='/productos/:catId' element={ <ItemListContainer/>} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout/>} />

          <Route path="*" element={ <Navigate to='/'/>} />

        </Routes>
      </BrowserRouter>
    </CartProvider> 
  )
}

export default App;
