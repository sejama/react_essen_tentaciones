import { CartFill, Cart} from 'react-bootstrap-icons';
import {useCartContext} from './CartContext'

function CartWidget(){
    const { cart } = useCartContext();

    return(
        <>
        {cart.length === 0 ?
            <Cart color="white" size={17} style={{marginRight: 10}}/>
        :            
            <CartFill color="white" size={17} style={{marginRight: 10}}>{cart.length}</CartFill>
        }
        </>
    )
}

export default CartWidget;