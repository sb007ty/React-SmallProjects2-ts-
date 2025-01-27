import React, { useEffect, useState } from "react";
import FileOnly from "./FileOnly";
import data from "./data";

function Directory({ id, name, children, hideEl, gap, updateData }) {
  console.log(name, hideEl);
  useEffect(() => {
    console.log("fist render", id);
  }, []);
  const [newDataValue, setNewDataValue] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const sortedDirectory = children
    .filter((item) => {
      return Object.hasOwn(item, "children");
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedFiles = children
    .filter((item) => {
      return !Object.hasOwn(item, "children");
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const [hidden, setHidden] = useState(true);
  const value = hidden ? "+" : "-";
  if (hideEl) return <React.Fragment key={"test"}></React.Fragment>;
  return (
    <div className={`directory`}>
      <div className="curr-dir" style={{ paddingLeft: `${gap}0px` }}>
        <div>{name}</div>
        {children.length > 0 && (
          <button
            className="dir-btn"
            onClick={(e) => {
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
}

export default Directory;
