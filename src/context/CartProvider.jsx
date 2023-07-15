import { createContext, useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../actions/cart.action';
import { cartReducer, cartInitialState } from '../reducers/cart.reducer';
import totalPrice from '../utils/Cart.utils';

const CartContext = createContext();

function CartProvider ({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [ orderTotal, setOrderTotal ] = useState(0);

    useEffect(() => {
            let total = totalPrice(state.cartItems).reduce((a,b) => a + b, 0);
            setOrderTotal(total)
        
    }, [state])

    function addToCart (drink) {
        dispatch({type: actionTypes.ADD_TO_CART, payLoad: drink})
    }
    function removeOneFromCart (idDrink) {
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payLoad: { idDrink }})   
    }
    function removeAllFromCart (idDrink) {
        dispatch({type: actionTypes.REMOVE_ALL_FROM_CART, payLoad: { idDrink }})
    }
    function clearCart () {
        dispatch({type: actionTypes.CLEAR_CART})
    }
    function sendOrder() {
        alert(JSON.stringify(state))
    }
    const cartValues = {
        cart : state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder,
        orderTotal,
    }
    return(
        <CartContext.Provider value={ cartValues }>
            {children}
        </CartContext.Provider>
    )

}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };