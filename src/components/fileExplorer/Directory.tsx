import React, { useState } from "react";
import FileOnly from "./FileOnly";
import { DirectoryType, FileElType } from "./file.type";
interface DirectoryProps {
  id: number;
  name: string;
  hideEl: boolean;
  gap: number;
  childrenArr: (DirectoryType | FileElType)[];
  updateData: (a: string, b: number, c: string) => void;
}
const Directory: React.FC<DirectoryProps> = ({
  id,
  name,
  childrenArr,
  hideEl,
  gap,
  updateData,
}) => {
  console.log(name, hideEl);

  const [newDataValue, setNewDataValue] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const sortedDirectory = childrenArr
    .filter((item) => {
      return Object.hasOwn(item, "childrenArr");
    })
    .sort((a, b) => a.name.localeCompare(b.name)) as DirectoryType[];
  const sortedFiles = childrenArr
    .filter((item) => {
      return !Object.hasOwn(item, "childrenArr");
    })
    .sort((a, b) => a.name.localeCompare(b.name)) as FileElType[];

  const [hidden, setHidden] = useState(true);
  const value = hidden ? "+" : "-";
  if (hideEl) return <React.Fragment key={"test"}></React.Fragment>;
  return (
    <div className={`directory`}>
      <div className="curr-dir" style={{ paddingLeft: `${gap}0px` }}>
        <div>{name}</div>
        {childrenArr.length > 0 && (
          <button
            className="dir-btn"
            onClick={() => {
              setHidden(!hidden);
            }}
          >{`[${value}]`}</button>
        )}

        {showAdd && (
          <>
            <input
              type="text"
              name=""
              id=""
              placeholder="Add new Data"
              value={newDataValue}
              onChange={(e) => {
                setNewDataValue(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                updateData(newDataValue, id, "file");
                setHidden(false);
              }}
            >
              Add as File
            </button>
            <button
              onClick={(e) => {
                updateData(newDataValue, id, "dir");
                setHidden(false);
              }}
            >
              Add as Directory
            </button>
          </>
        )}
        {!showAdd && (
          <button onClick={(e) => setShowAdd(true)}>Add new File/Dir</button>
        )}
        {showAdd && (
          <button onClick={(e) => setShowAdd(false)}>
            Hide Add new File/Dir Option
          </button>
        )}
      </div>

      {sortedDirectory.map((item) => {
        return (
          <Directory
            {...item}
            key={item.id}
            hideEl={hidden}
            gap={gap + 2}
            updateData={updateData}
          />
        );
      })}

      {sortedFiles.map((item) => {
        return (
          <FileOnly {...item} key={item.id} hideEl={hidden} gap={gap + 2} />
        );
      })}
    </div>
  );
};

export default Directory;
