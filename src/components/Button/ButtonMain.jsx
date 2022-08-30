import styles from './Button.module.css';
function ButtonMain(props) {

    
    const refSeccion = () => {
        // let anchorElement = document.getElementById('form_inscripcion');
        // if(anchorElement) { anchorElement.scrollIntoView({block: 'end', behavior: 'smooth'})}
        if(props.referencia) { props.referencia.current.scrollIntoView()}
    }
    return (
        <div>
            <button className={styles.button} onClick={refSeccion}>
                {props.titleButton}
            </button>  
        </div>
    );
}

export default ButtonMain;