import React from 'react';
import { Toast } from 'react-bootstrap';
import './Style.css';

const MyToast = (props) => {
  const { show, type, message } = props;

  const toastCss = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '1',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    animation: 'loseOpacity 3s ease-in',
  };

  return (
    <div style={toastCss}>
      <Toast className={`border text-white border-${type} bg-${type}`} show={show}>
        <Toast.Header className={`bg-${type} text-white`} closeButton={false}>
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default MyToast;
