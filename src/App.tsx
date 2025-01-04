import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Notifications from "./components/notifications-proj/Notifications";
import NotificationMsg from "./components/notifications-proj/NotificationMsg";
import { NotificationMsgContext } from "./components/notifications-proj/notificationMsgContext";
import NotificationMsgContextProvider from "./components/notifications-proj/NotificationMsgContextProvider";

function App() {
  return (
    <div className="app">
      <NotificationMsgContextProvider>
        <Notifications />
        <NotificationMsg />
      </NotificationMsgContextProvider>
    </div>
  );
}

export default App;
