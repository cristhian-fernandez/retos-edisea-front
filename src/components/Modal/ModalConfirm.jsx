import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css';

function ModalConfirm({show, setShow, children, titleModal ='Inscripción completa', modalBody = {name :'', link : '/'}}) {
  const handleClose = () => setShow(false);
  const handleConfirm = () => {
    window.open(modalBody.link);
    setShow(false);
  }
  
  return (
    <div >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={`${styles.modalHeader} ${styles.modalConfirmHeader}`}>
          <Modal.Title className={`${styles.modalTitle} ${styles.modalConfirmTitle}`}>
            <i className="fa-solid fa-circle-check"></i><h3>{titleModal}</h3>
          </Modal.Title>
          <button onClick={handleClose}>x</button>
        </Modal.Header>

        <Modal.Body className={`${styles.modalBody} ${styles.modalConfirmBody}`}>
          <p><b>!Felicitaciones {modalBody.name}!</b> por inscribirte, en breve te llegará un correo con más información de las clases.</p>
          <p>Se te redireccionará al whatshap para confirmarnos que ya te has inscrito. Nos vemos 😁</p>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={() => handleConfirm(modalBody.link)} className={styles.modalConfirmButton}>
            <span><i className="fa-brands fa-whatsapp"></i></span> Enviar confirmación
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalConfirm;