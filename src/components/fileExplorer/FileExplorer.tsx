import { useState } from "react";
import data from "./data";
import Directory from "./Directory";
import FileOnly from "./FileOnly";
import "./styles.css";
const FileExplorer: React.FC = () => {
  const [localData, setLocalDate] = useState(data);
  function updateData(newDataName, dataId, type) {
    console.log(newDataName, dataId, " newo**");
    const newData = structuredClone(localData);
    let dataToEdit;
    function findDataToEdit(el) {
      if (!el.children) return;
      if (el.id === dataId) return el;
      for (let i of el.children) {
        const ans = findDataToEdit(i);
        if (ans) return ans;
      }
      return;
    }
    for (let i of newData) {
      let ans = findDataToEdit(i);
      if (ans) {
        dataToEdit = ans;
        break;
      }
    }
    console.log(dataToEdit, "datatoedit*");

    const newDataObj = {
      name: newDataName,
      id: crypto.randomUUID(),
    };
    if (type === "dir") {
      dataToEdit?.children.push({
        ...newDataObj,
        children: [],
      });
    } else if (type === "file") {
      dataToEdit?.children.push(newDataObj);
    }
    setLocalDate(newData);
    console.log(newData, " newData*");
  }
  const sortedDirectory = localData
    .filter((item) => {
      return Object.hasOwn(item, "children");
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedFiles = localData
    .filter((item) => {
      return !Object.hasOwn(item, "children");
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="file-explorer">
      {sortedDirectory.map((item) => {
        return (
          <Directory
            {...item}
            key={item.id}
            hideEl={false}
            gap={0}
            updateData={updateData}
          />
        );
      })}
      {sortedFiles.map((item) => {
        return <FileOnly {...item} key={item.id} hideEl={false} gap={0} />;
      })}
    </div>
  );
};

export default FileExplorer;
