import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();
const cartInitialState = {
    cartItems: [],

}
const actionTypes = {
    ADD_TO_CART : "ADD_TO_CART",
    REMOVE_ONE_FROM_CART : "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART : "REMOVE_ALL_FROM_CART",
    CLEAR_CART : "CLEAR_CART",
}
function cartReducer (state, action) {
    const payLoad = action.payLoad;
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payLoad] 
            }
    }


}

function CartProvider ({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)


    function addToCart (drink) {
        dispatch({type: actionTypes.ADD_TO_CART, payLoad: drink})
    }
    function removeOneFromCart () {

    }
    function removeAllFromCart () {

    }
    function clearCart () {

    }

    const cartValues = {
        cart : state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
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