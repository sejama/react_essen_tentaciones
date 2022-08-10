import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer /> 
      <ItemListContainer nombre="Titulo del ItemListContainer"/>
    </div>
  );
}

export default App;
