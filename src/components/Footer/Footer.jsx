
import styles from './Footer.module.css';


function Footer() {
    let urlFacebook = 'https://www.facebook.com/edisea.profesional';
    let urlInstagram = 'https://www.instagram.com/edisea_profesional/';
    let urlTiktok = 'https://www.tiktok.com/@clubedisea';
    let urlLinkedin = 'https://www.linkedin.com/company/ediseaperu';
    let urlWhatsapp = `https://api.whatsapp.com/send?phone=+51951420376&text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20las%20Clases%20de%20programaci%C3%B3n%20en%20Edisea%20%F0%9F%98%81`;

    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h3>Escríbenos</h3>
                <div onClick={() => window.open(urlWhatsapp)}>
                    <span><i className="fa-brands fa-whatsapp"></i></span>
                    <span className={styles.phone}>+51 951 420 376</span>
                </div>
            </div>
            <div>
                <div className={styles.brands}>
                    <span onClick={() => window.open(urlFacebook)}><i className="fa-brands fa-facebook"></i></span>
                    <span onClick={() => window.open(urlInstagram)}><i className="fa-brands fa-instagram"></i></span>
                    <span onClick={() => window.open(urlTiktok)}><i className="fa-brands fa-tiktok"></i></span>
                    <span onClick={() => window.open(urlLinkedin)}><i className="fa-brands fa-linkedin"></i></span>
                </div>
                <div className={styles.copy} >
                    <span>Copyright © 2022 | Desarrollado por Edisea</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;