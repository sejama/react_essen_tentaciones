import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" component={<ItemListContainer nombre="Titulo del ItemListContainer"/>} />
          <Route path="/detalle" component={<ItemDetailContainer />} />
          <NavBar  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
