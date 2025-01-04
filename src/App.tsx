import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Notifications from "./components/notifications-proj/Notifications";
import NotificationMsg from "./components/notifications-proj/NotificationMsg";
import { NotificationMsgContext } from "./components/notifications-proj/notificationMsgContext";

function App() {
  const [notificationMsg, setNotificationMsg] = useState([]);
  return (
    <div className="app">
      <NotificationMsgContext.Provider
        value={{ notificationMsg, setNotificationMsg }}
      >
        <Notifications />
        <NotificationMsg />
      </NotificationMsgContext.Provider>
    </div>
  );
}

export default App;
