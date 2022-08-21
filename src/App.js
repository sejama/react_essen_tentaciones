import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createContext}  from 'react';

export const  CartContext = createContext('');

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value='Sebastian'>
          
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer nombre="Titulo del ItemListContainer"/>} />
          <Route path="/detalle/:idItem" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer nombre="Titulo del ItemListContainer con filtro"/>} />
          <Route path="*" element={<h1>Elemento no encontrado</h1>} />
        </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
