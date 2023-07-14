import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";

export default function Header () {
    const { toogleModal } = useModal();
    
    return (
        <header className={`py-5 ${styles.header}`}>
            <h1>Buscador de bebidas</h1>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => toogleModal()}/>
        </header>
    )
    
}