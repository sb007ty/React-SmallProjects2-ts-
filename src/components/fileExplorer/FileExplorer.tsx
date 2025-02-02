/* eslint-disable no-prototype-builtins */
import { useState } from "react";
import data from "./data";
import FileOnly from "./FileOnly";
import "./styles.css";
import { DirectoryType, FileElType } from "./file.type";
const FileExplorer: React.FC = () => {
  const [localData, setLocalDate] = useState(data);
  function updateData(newDataName: string, dataId: number, type: string) {
    console.log(newDataName, dataId, " newo**");
    const newData = structuredClone(localData);
    let dataToEdit;
    function findDataToEdit(el) {
      if (!el.childrenArr) return;
      if (el.id === dataId) return el;
      for (let i of el.childrenArr) {
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
      dataToEdit?.childrenArr.push({
        ...newDataObj,
        childrenArr: [],
      });
    } else if (type === "file") {
      dataToEdit?.childrenArr.push(newDataObj);
    }
    setLocalDate(newData);
    console.log(newData, " newData*");
  }
  const sortedDirectory = localData
    .filter((item) => {
      // eslint-disable-next-line no-prototype-builtins
      return item.hasOwnProperty("childrenArr");
    })
    .sort((a, b) => a.name.localeCompare(b.name)) as DirectoryType[];
  const sortedFiles = localData
    .filter((item) => {
      return !item.hasOwnProperty("childrenArr");
    })
    .sort((a, b) => a.name.localeCompare(b.name)) as FileElType[];
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
