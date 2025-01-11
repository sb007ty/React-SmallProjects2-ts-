import { createContext, useState } from "react";

export const NotificationMsgContext = createContext(null);

const NotificationMsgContextProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [notificationMsg, setNotificationMsg] = useState([]);
  console.log("hello");
  return (
    <NotificationMsgContext.Provider
      value={{ notificationMsg, setNotificationMsg }}
    >
      {children}
    </NotificationMsgContext.Provider>
  );
};

export default NotificationMsgContextProvider;
