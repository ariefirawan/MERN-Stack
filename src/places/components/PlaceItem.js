import React, { useState, useContext } from 'react';

import './PlaceItem.css';
import Map from '../../shared/components/UIElements/Map';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setModalDelete] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const showDeleteWarningHandler = () => {
    setModalDelete(true);
  };

  const cancelDeleteHandler = () => {
    setModalDelete(false);
  };

  const confirmDeleteHandler = () => {
    setModalDelete(false);
    console.log('deleting....');
  };

  return (
    <React.Fragment>
      <Modal
        show={openModal}
        onCancel={closeModal}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModal}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={openModalDelete}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={showModal}>
              View ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
