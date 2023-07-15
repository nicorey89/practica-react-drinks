export default function totalPrice (cartItems) {
    return cartItems.map((item) => item.quantity * item.price)
}