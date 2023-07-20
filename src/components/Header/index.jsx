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
            <div>
            <h1>Buscador de bebidas</h1>
            </div>
            {
                currentUser && (
                    <>
                    <div className={styles.bienvenido}>
                    <h2>Bienvenid@ {currentUser.name} !</h2>
                    </div>
                    <div className={styles.cartUser}>
                    <button onClick={logout}>Cerrar sesion</button>
                    <br/>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => toogleModal()}/>
                    </div>
                    </>
                )
            }
        </header>
    )
    
}