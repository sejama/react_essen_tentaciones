import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from './components/Checkout/Checkout';


function App() {
    
    return (
      
      //envolver todo en el BrowserRouter. Luego en el Routes lo que queremos que varie

      <CartProvider>
        
        <BrowserRouter>
          <NavBar/>

          <Routes>

              <Route path="/" element={<ItemListContainer/>}/>
              <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
              <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
              <Route path='*' element={ <Navigate to='/'/> }/>
              <Route path='/cart' element={ <Cart/> }/>
              <Route path='/checkout' element={ <Checkout/> }/>

          </Routes>

        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
//