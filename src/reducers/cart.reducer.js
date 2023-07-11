import { actionTypes } from "../actions/cart.action";

export const cartInitialState = {
    cartItems: [],
}

export function cartReducer (state, { type, payLoad }) {
    const { idDrink } = payLoad;
    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    switch(type) {
        case actionTypes.ADD_TO_CART:
            //saber si el producto a agregar esta en el carrito
            if(drinkInCart){
                //afirmativo, incrementar la cantidad +1
                let cartItemsUpdated = state.cartItems.map( item => {
                    if(item.idDrink === idDrink){
                        return {
                            ...item,
                            quantity: item.quantity + 1, 
                        }
                    }
                    return item
                })
                return {
                    ...state,
                    cartItems: cartItemsUpdated,
                }
            }else{
                //negativo, agregamos el producto con cantidad 1
                payLoad.quantity = 1
                return {
                   ...state,
                   cartItems: [...state.cartItems, payLoad] 
               } 
            }
        case actionTypes.REMOVE_ONE_FROM_CART:
            //existe el producto en el carrito?
            if(drinkInCart){
                //quantity > 1 ? restar 1
                let cartItemsUpdated = state.cartItems.filter( item => {
                    if(item.idDrink === idDrink){
                        return {
                            ...item,
                            quantity: item.quantity - 1, 
                        }
                    }
                    return item
                })
                return {
                    ...state,
                    cartItems: cartItemsUpdated,
                }
            }else{
                //quantity < 1 = quitar del carrito 
                if(drinkInCart){
                    let cartItemsUpdated = state.cartItems.filter(item => !item.idDrink === idDrink)
                    return {
                        ...state,
                        cartItems: cartItemsUpdated
                    }
                }
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if(drinkInCart){
                let cartItemsUpdated = state.cartItems.filter(item => !item.idDrink === idDrink)
                return {
                    ...state,
                    cartItems: cartItemsUpdated
                }
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            }
    }
}