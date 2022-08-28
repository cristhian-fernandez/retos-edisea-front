import ThemeModeButton from "../ThemeModeButton/ThemeModeButton";
import styles from './Nav.module.css';
import logo from './../../assets/logo_edisea.png';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className={styles.nav} >
            <picture>
                <Link to='/'><img src={logo} alt="logo_edisea" /></Link>
            </picture>
            <ThemeModeButton />
        </nav>
    );
}

export default Nav;