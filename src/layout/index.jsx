import styles from "./MainLayout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default function MainLayout ({children}) {
    return (
        <div className={styles.main}>
            <Header />
            <Container className="mt-5">
                {children}
            </Container>
            <Footer />
        </div>

    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}