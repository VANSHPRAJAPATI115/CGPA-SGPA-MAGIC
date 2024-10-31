// src/Alert.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Navber.css'; // Ensure this CSS file has the necessary styles

const Alert = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#343a40', color: '#ffffff' }}>
        <Modal.Title style={{ color: '#ffffff' }}>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: '#ffffff' }}>Please log in to continue.</Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#343a40' }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Alert;  
