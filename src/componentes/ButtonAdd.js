import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

function ButtonAdd(){
    
    function onAdd(){
        Swal.fire({
            title: 'Desea agragar al carrito?',
            text: 'Agregando producto al carrito!',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Seguir comprando`,
            cancelButtonText: `Cancelar`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Confirmar', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Seguir comprando', '', 'info')
            }
          })
        console.log("Agregado al carrito");
    }
    return (
        <>
            <Button variant="secondary" onClick={onAdd}>Agregar al carrito</Button>{''}
        </>
    )
}

export default ButtonAdd;