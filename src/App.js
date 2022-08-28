import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/CartContext'



function App() {

  return (
    <div>
      
      <BrowserRouter>
        <CartProvider >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer nombre="Titulo del ItemListContainer"/>} />
          <Route path="/detalle/:idItem" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer nombre="Titulo del ItemListContainer con filtro"/>} />
          <Route path="/Cart" element={<Cart />  } />
          <Route path="*" element={<h1>Elemento no encontrado</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
