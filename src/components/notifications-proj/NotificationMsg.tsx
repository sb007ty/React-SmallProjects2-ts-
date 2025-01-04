import { useContext, useEffect, useRef } from "react";
import { NotificationMsgContext } from "./NotificationMsgContextProvider";
import NotificationMsgElement from "./NotificationMsgElement";

const NotificationMsg: React.FC = () => {
  const { notificationMsg, setNotificationMsg } = useContext(
    NotificationMsgContext
  );
  const timer = useRef();
  useEffect(() => {
    if (notificationMsg.length === 0) return;
    timer.current = setInterval(() => {
      if (notificationMsg.length === 0) clearInterval(timer.current);
      const newNotification = notificationMsg.filter(
        (item) => item.progress < 100
      );
      // console.log(newNotification, "newN***");
      setNotificationMsg(newNotification);
    }, 100);
    return () => {
      console.log(timer.current, "timer**");
      clearInterval(timer.current);
    };
  }, [notificationMsg, setNotificationMsg]);
  console.log(notificationMsg, "not*");
  if (notificationMsg.length === 0) return null;
  return (
    <div className="not-msg-container">
      {notificationMsg.map((item, index) => {
        // if (item.progress < 100)
        return <NotificationMsgElement {...item} key={item.id} />;
      })}
    </div>
  );
};

export default NotificationMsg;
