import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import useCart from "../../hooks/useCart";

function CartModal () {
    const { isOpen, toogleModal } = useModal()
    const { cart, addToCart, removeOneFromCart, removeAllFromCart, clearCart} = useCart();

    if(isOpen)
    return (
        <div className={styles.modalBg} onClick={() => toogleModal()}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon}/>
                <h2>Mi carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinkListContainer}>
                        {cart.cartItems.map(drink => {return(
                        <article key={drink.idDrink} className={styles.card}>
                            <img src={drink.strDrinkThumb} alt="" className={styles.img} />
                            <span className={styles.nombre}>{drink.strDrink}</span>
                            <span>{drink.price}</span>
                            <div className={styles.counter}>
                                <button onClick={removeOneFromCart}>
                                    -
                                </button>
                                <span>
                                    {drink.quantity}
                                </span>
                                <button onClick={() => addToCart(drink)}>
                                    +
                                </button>
                            </div>
                            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={removeAllFromCart}/>
                        </article>
                        )})}
                    </div>
                    <aside>
                        <p>subtotal: $XXXXXX</p>
                        <p>total: $XXXXXX</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart} onClick={clearCart}>Vaciar Carrito</button>
                            <button className={styles.confirmCart}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default CartModal;