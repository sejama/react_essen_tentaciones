import { CartFill, Cart} from 'react-bootstrap-icons';

function addItem(item, quantity){ // agregar cierta cantidad de un ítem al carrito
    
}
function removeItem(itemId){ // Remover un item del cart por usando su id

} 
function clear(){ // Remover todos los items

}
function isInCart(id){ //true|false

} 

function CartWidget(){
    return(
        <>
            <Cart color="white" size={17} style={{marginRight: 10}}/>
            <CartFill color="white" size={17} style={{marginRight: 10}}/>
        </>
    )
}

export default CartWidget;