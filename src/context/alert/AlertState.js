import React, { useState } from 'react'
import AlertContext from "./alertContext";

function AlertState(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000); 
  }
   return (
    <AlertContext.Provider
      value={{ alert, showAlert }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState