import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import {useCartContext} from './CartContext';
import {Link} from "react-router-dom";

function ButtonAdd({total,item}){
  const {cart, addItem} = useCartContext();
    let texto = "Total "+ total + "de "+ item.title;
    function onAdd(){
        Swal.fire({
            title: 'Desea agragar al carrito?',
            text: 'Agregando producto al carrito!' + texto,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Seguir comprando`,
            cancelButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Confirmar', '', 'success')
              addItem(item,total);
            } 
          })
    }
    return (
        <>
            <Button variant="secondary" onClick={onAdd}>Agregar al carrito</Button>
            {cart.length !== 0 ? 
             <Link to="/Cart"><Button  className="form-group"  width="auto" height="auto" variant="success">Ir al Carrito</Button></Link>
             : null}
            
        </>
    )
}

export default ButtonAdd;