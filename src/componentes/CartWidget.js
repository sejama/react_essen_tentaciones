import { CartFill, Cart} from 'react-bootstrap-icons';

function CartWidget(){
    return(
        <>
            <Cart color="white" size={17} style={{marginRight: 10}}/>
            <CartFill color="white" size={17} style={{marginRight: 10}}/>
        </>
    )
}

export default CartWidget;