import { useContext } from "react";
import alertContext from "../context/alert/alertContext";

const Alert = () => {
  const context = useContext(alertContext);
  const { alert } = context;

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ "height": "50px"}}>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          <strong>{capitalize(alert.type)}</strong>: {alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert