import { CartFill, Cart} from 'react-bootstrap-icons';
import {useCartContext} from './CartContext'

function CartWidget(){
    const { cart } = useCartContext();

    return(
        <>
        {cart.length === 0 ?
            <Cart color="white" size={17} style={{marginRight: 10}}/>
        :   
            <>       
                <span style={{color: 'white'}}>{cart.length}</span>  
                <CartFill color="white" size={17} style={{marginRight: 10}} />          
            </>
        }
        </>
    )
}

export default CartWidget;