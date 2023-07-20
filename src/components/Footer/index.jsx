import styles from "./Footer.module.css";
import Copyright from "../../pages/User/Copyright"

export default function Footer () {
    return (
        <footer className={`py-5 ${styles.footer}`}>
            <Copyright />
        </footer>
        
    )
}