import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastContainerComponent = ({taskId, statusMssg, text, showTC}) => {
    const [show, setShow] = useState(false);

  return (
    <Toast
      onClose={() => setShow(false)} 
      show={showTC} 
      delay={3000} 
      autohide
      className="d-inline-block m-1"
      bg={statusMssg}
      key={taskId}
    >
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
      </Toast.Header>
      <Toast.Body className='Dark'>
        {text}
      </Toast.Body>
    </Toast>
  )
}

export default ToastContainerComponent