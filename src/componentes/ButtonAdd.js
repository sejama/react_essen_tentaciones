import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import {useCartContext} from './CartContext'

function ButtonAdd({total,item}){
  const {addItem} = useCartContext();
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
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Confirmar', '', 'success')
              addItem(item,total);
            } 
          })
    }
    return (
        <>
            <Button variant="secondary" onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
}

export default ButtonAdd;