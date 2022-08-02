import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

function Alert (){
    Swal.fire(
        "Esto es un modal",
        "Puedes poner cualquier cosa",
        "question"
    )
}

export default Alert;