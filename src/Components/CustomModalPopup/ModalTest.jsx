import React, { useState } from 'react';
import Modal from './Modal';

const ModalTest = () => {
    
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const onClose = () => {
        setOpenModal(false);
      }
    
      return (
        <div>
          <button onClick={handleOpenModal}>Open Modal Popup</button>
          {openModal && (
            <Modal
              id={"custom-id"}
              header={<h1>Customized Header</h1>}
              footer={<h1>Customized Footer</h1>}
              onClose={onClose}
              body={<div>Customized body</div>}
            />
          )}
        </div>
      );
}

export default ModalTest;
