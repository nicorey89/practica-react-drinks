import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import useAuth from "../../hooks/useAuth";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo/c.svg"

export default function Header () {
    const { toogleModal } = useModal();
    const { logout, currentUser } = useAuth();
    return (
        
        <header className={styles.header}>
        {
            currentUser && (
                    <div className={styles.navBar}>
                    <div className={styles.logoContainer}>
                    <img src={Logo} alt="" className={styles.logo} />
                    </div>
                    <div className={styles.userContainer}>
                    <div className={styles.bienvenido}>
                    <h3>Bienvenid@ {currentUser.name} !</h3>
                    </div>
                    <div className={styles.cartUser}>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon} onClick={() => toogleModal()}/>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} onClick={logout}/>
                    </div>
                    </div>
                    </div>
                    )
                }
        </header>
    )
    
}