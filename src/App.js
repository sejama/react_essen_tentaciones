import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer nombre="Titulo del ItemListContainer"/>
    </div>
  );
}

export default App;
