import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css';

function ModalAlert({show, setShow, children, titleModal ='Alerta', modalBody = 'Correcto'}) {
  const handleClose = () => setShow(false);
  
  return (
    <div >
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton className={styles.modalHeader}> */}
        <Modal.Header className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
              <i className="fa-solid fa-triangle-exclamation"></i><h3>{titleModal}</h3>
          </Modal.Title>
          <button onClick={handleClose}>x</button>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          {modalBody}
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={handleClose} className={styles.modalButton}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAlert;