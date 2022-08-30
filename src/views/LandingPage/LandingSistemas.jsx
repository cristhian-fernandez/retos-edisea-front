import styles from './LandingSistemas.module.css';
import stylesMain from './../../css/styles.module.css';
import banner_img from './../../assets/banner_img.png';
import group from './../../assets/group.png';
import computer from './../../assets/computer.png';
import ButtonMain from '../../components/Button/ButtonMain';
import FormInscripcion from '../../components/Form/FormInscripcion';
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
            <div className={styles.content}>
                <div className={styles.content_header}>
                    <h2>Experimenta y domina esta gran carrera</h2>
                    <div className={styles.underlined}></div>
                </div>
                
                <div className={styles.content_seccion}>
                    <div>
                        <img src={computer} alt="sin costo" />
                        <h3>S/0 Costo Inicial</h3>
                        <p>Creemos que todos merecen la oportunidad de convertirse en grandes programadores, es por ello que estas 2 semanas no tienen ningún costo.</p>
                    </div>
                    <div>
                        <img src={group} alt="equipo programadores" />
                        <h3>Estudia en grupo</h3>
                        <p>Está demostrado que aprender en grupo es más eficiente y motivador, con ayuda podrás tener nuevas ideas y hacer mejores proyectos.</p>
                    </div>
                </div>
            </div>
            <div className={styles.steps}>
                <h2>¿Como aplicar?</h2>
                <p>Demuéstranos que te comprometes en aprender esta carrera y nosotros te ayudamos a despegar tus conocimientos en programación.</p>
                <div className={styles.steps_list}>
                    <div className={stylesMain.card}>
                        <h3><span className={styles.steps_number}>1</span>Aplica</h3>
                        <p>Empieza por hacer click en el botón Aplica. No es necesario que tengas conocimientos previos.</p>
                    </div>
                    <div className={stylesMain.card}>
                        <h3><span className={styles.steps_number}>2</span>Prep. Curso</h3>
                        <p>Accede al Curso de Preparación de 2 semanas que te ayudara a prepararte para el Edisea Challenge.</p>
                    </div>
                    <div className={stylesMain.card}>
                        <h3><span className={styles.steps_number}>3</span>Reto Challenge</h3>
                        <p>Rinde el Reto Sistemas Challenge, un examen de conocimientos para que pongas en practica lo aprendido en el Prep. Curso.</p>
                    </div>
                </div>
            </div>
            <div className={styles.inscripcion}>
                <h2>¿Listo para aprender a programar? </h2>
                <h4>Inscríbete</h4>
                <FormInscripcion />
            </div>
        </div>
    );
}

export default LandingSistemas;