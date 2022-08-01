import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

function App() {

  const stock = 10;
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre="Titulo del ItemListContainer"/>
      <ItemCount cantidad={stock} />
    </div>
  );
}

export default App;
