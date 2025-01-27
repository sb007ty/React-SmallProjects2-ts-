import "./App.css";
import Notifications from "./components/notifications-proj/Notifications";
import NotificationMsg from "./components/notifications-proj/NotificationMsg";
import NotificationMsgContextProvider from "./components/notifications-proj/NotificationMsgContextProvider";
import FileExplorer from "./components/fileExplorer/FileExplorer";
import UserDb from "./components/UsersDb/UserDb";

function App() {
  return (
    <div className="app">
      {/* <NotificationMsgContextProvider>
        <Notifications />
        <NotificationMsg />
      </NotificationMsgContextProvider> */}
      {/* <FileExplorer /> */}
      <UserDb />
    </div>
  );
}

export default App;
