import PropTypes from "prop-types";
import styles from "../CartModal/CartModal.module.css"
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function ModalCart ({drink}) {
    const { addToCart, removeOneFromCart, removeAllFromCart} = useCart()
    return (
        <article className={styles.card}>
        <img src={drink.strDrinkThumb} alt="" className={styles.img} />
        <span className={styles.nombre}>{drink.strDrink}</span>
        <span>$ {drink.price}</span>
        <div className={styles.counter}>
            <button onClick={() => removeOneFromCart(drink.idDrink)}>
                -
            </button>
            <span>
                {drink.quantity}
            </span>
            <button onClick={() => addToCart(drink)}>
                +
            </button>
        </div>
        <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={() => removeAllFromCart(drink.idDrink)}/>
        </article>

    )
}
ModalCart.proptypes = {
    drink: PropTypes.object.isRequired
}