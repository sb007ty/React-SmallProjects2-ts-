import { useContext, useEffect, useRef, useState } from "react";
import { NotificationMsgContext } from "./notificationMsgContext";

const NotificationMsgElement: React.FC = ({ type, message, id }) => {
  let bgColor = "";
  switch (type) {
    case "ERROR":
      bgColor = "#e74c3c";
      break;
    case "WARNING":
      bgColor = "#f1c40f";
      break;
    case "INFO":
      bgColor = "#3498db";
      break;
    default:
      bgColor = "#2ecc71";
      break;
  }
  const [out, setOut] = useState(true);
  const [progress, setProgress] = useState(0);
  const { notificationMsg, setNotificationMsg } = useContext(
    NotificationMsgContext
  );
  const timerRef = useRef();
  useEffect(() => {
    if (progress >= 100) {
      clearInterval(timerRef.current);
      const newNotificationMsg = notificationMsg.map((item) => {
        if (item.id === id) {
          return { ...item, progress: 100 };
        }
        return { ...item };
      });
      setOut(true);
      setNotificationMsg(newNotificationMsg);
      setProgress(0);
    }
  }, [progress, notificationMsg, id, setNotificationMsg]);
  useEffect(() => {
    console.log("IN useeffect");
    setOut(false);
    timerRef.current = setInterval(() => {
      console.log("prog");
      setProgress((progress) => progress + 10);
    }, 400);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  const getMsgClass = () => {
    return `not-msg-el${out === true ? " not-msg-el-out" : " not-msg-el-in"}`;
  };
  console.log(notificationMsg, "not*", progress);
  return (
    <div
      className={getMsgClass()}
      style={{ border: `2px solid ${bgColor}` }}
      onMouseEnter={(e) => {
        clearInterval(timerRef.current);
      }}
      onMouseLeave={(e) => {
        timerRef.current = setInterval(() => {
          console.log("prog");
          setProgress((progress) => progress + 10);
        }, 400);
      }}
    >
      <div className="not-msg-el-message">{message}</div>
      <div className="not-msg-el-timer">
        <div
          className="not-msg-el-timer-child"
          style={{
            width: `${progress}%`,
            backgroundColor: bgColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default NotificationMsgElement;
