import styles from './LandingSistemas.module.css';
import banner_img from './../../assets/banner_img.png';
import ButtonMain from '../../components/Button/ButtonMain';
function LandingSistemas() {
    return (
        <div className={styles.LandingSistemas}>
            <div className={styles.banner_landing}>
                <div>
                    <h1>Descubre tu futuro en la programación</h1>
                    <p>Clases en vivo y directo, enfoque 100% práctico, mentorías personalizadas y acceso a una comunidad de estudiantes.</p>
                    <ButtonMain />
                </div>
                <picture>
                    <img src={banner_img} alt="programacion" />
                </picture>
            </div>
        </div>
    );
}

export default LandingSistemas;