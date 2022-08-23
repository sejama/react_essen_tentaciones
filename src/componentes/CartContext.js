import {  createContext, useState, useContext } from "react"; 

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    console.log("Carrito", cart)

    /*function addItem(item, quantity){ // agregar cierta cantidad de un ítem al carrito
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart =[...cart];
        }else{
            product = {...item, quantity: quantity};
            newCart = [...cart, product];
        }
        setCart(newCart);
    }
*/
    function addItem(item, quantity) {
        if(isInCart(item)){    
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product 
            }));
        }else{
            setCart([...cart, {...item, quantity}]);
        }
    }
    function removeItem(item){ // Remover un item del cart por usando su id
        setCart(cart.filter(prodcut => prodcut.id !== item.id))
    } 

    function clear(){ // Remover todos los items
        setCart([]);
    }
    function isInCart(item){ //true|false
        return cart.find(product => product.id === item.id) ? true : false;
    } 

    return (
        <CartContext.Provider value={
            {
                cart,
                addItem,
                isInCart,
                removeItem,
                clear,
                
               
            }
        }>
            {children}
        </CartContext.Provider>
    )
}
