import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalComponent = ({ toggleModal, children, modalTitle, isOpen, className, extraFunc}) => (
  <div>
    <Modal isOpen={isOpen} toggle={toggleModal} className={className}>
      <ModalHeader toggle={toggleModal}>{modalTitle}</ModalHeader>
      <ModalBody>
        { children }
      </ModalBody>
      <ModalFooter>
        <Button color="link" onClick={toggleModal}>Cancel</Button>{' '}
        <Button color="success" onClick={extraFunc}>Create</Button>
      </ModalFooter>
    </Modal>
  </div>
)

export default ModalComponent;