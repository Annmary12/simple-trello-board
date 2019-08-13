import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const AlertComponent = ({ content, color }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  return (
    <Alert color={color} isOpen={visible} toggle={onDismiss}>
     {content}
    </Alert>
  )
}

export default AlertComponent;