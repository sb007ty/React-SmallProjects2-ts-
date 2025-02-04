import { useContext } from "react";
import "./notifications.css";
import { NotificationDetails } from "./notificationTypes";
import { NotificationMsgContext } from "./NotificationMsgContextProvider";
const Notifications: React.FC = () => {
  const { showNotification } = useNotifications();

  const handleClick = (e) => {
    const { target } = e;
    const type: string = target.getAttribute("data-type");
    console.log(type);
    showNotification({
      type,
      message: `${type} Notification`,
    });
  };

  return (
    <div className="content">
      <h1>Add Notification</h1>
      <div className="actions">
        <button className="info" onClick={handleClick} data-type="INFO">
          Info
        </button>
        <button className="success" onClick={handleClick} data-type="SUCCESS">
          Success
        </button>
        <button className="warning" onClick={handleClick} data-type="WARNING">
          Warning
        </button>
        <button className="error" onClick={handleClick} data-type="ERROR">
          Error
        </button>
      </div>
    </div>
  );
};

function useNotifications() {
  const { notificationMsg, setNotificationMsg } = useContext(
    NotificationMsgContext
  );
  console.log(notificationMsg);
  const showNotification = (notificationObj: NotificationDetails) => {
    console.log("shownot", notificationObj);
    const newNotObj = {
      ...notificationObj,
      id: crypto.randomUUID(),
      mouseActive: false,
      progress: 0,
    };
    const newNotification = [...notificationMsg, newNotObj];
    setNotificationMsg(newNotification);
  };
  return { showNotification };
}
export default Notifications;
