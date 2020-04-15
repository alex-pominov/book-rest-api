import React from "react";
import { Toast } from "react-bootstrap";

const MyToast = (props) => {
  const style = {
    position: "fixed",
    top: "80px",
    right: "30px",
    zIndex: "1",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  };

  return (
    <div style={props.show && style}>
      <Toast className={`border text-white border-${props.type} bg-${props.type}`} show={props.show}>
        <Toast.Header className={`bg-${props.type} text-white`} closeButton={false}>
          <strong className="mr-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default MyToast;
