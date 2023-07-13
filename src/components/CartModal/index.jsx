import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useModalCart } from "../../hooks/useModalCart";

function CartModal () {
    const { isOpen, toogleModal } = useModalCart()
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon}/>
                <h2>Mi carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinkListContainer}>
                        <article className={styles.card}>
                            <img src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg" alt="" className={styles.img} />
                            <span>Nombre</span>
                            <span>Precio</span>
                            <div className={styles.counter}>
                                <button>
                                    -
                                </button>
                                <span>
                                    2
                                </span>
                                <button>
                                    +
                                </button>
                            </div>
                            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash}/>
                        </article>
                    </div>
                    <aside>
                        <p>subtotal: $XXXXXX</p>
                        <p>total: $XXXXXX</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart}>Vaciar Carrito</button>
                            <button className={styles.confirmCart}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}

export default CartModal;