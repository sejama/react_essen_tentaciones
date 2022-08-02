import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import CardProducto from './componentes/CardProducto';

function App() {

  
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre="Titulo del ItemListContainer"/>
      <CardProducto />  
    </div>
  );
}

export default App;
