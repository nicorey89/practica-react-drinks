import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";

export default function Header () {
    const { toogleModal } = useModal();
    const { logout, currentUser } = useAuth();
    return (
        <header className={`py-5 ${styles.header}`}>
            <h1>Buscador de bebidas</h1>
            {
                currentUser && (
                    <>
                    <h2>{currentUser.name}</h2>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => toogleModal()}/>
                    <br/>
                    <button onClick={logout}>Cerrar sesion</button>
                    </>
                )
            }
        </header>
    )
    
}