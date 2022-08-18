import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

function ButtonAdd({total,id}){
    let texto = "Total "+ total + "del id "+ id;
    function onAdd(){
        Swal.fire({
            title: 'Desea agragar al carrito?',
            text: 'Agregando producto al carrito!' + texto,
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
    }
    return (
        <>
            <Button variant="secondary" onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
}

export default ButtonAdd;