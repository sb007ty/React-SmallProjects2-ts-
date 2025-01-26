import { useState } from "react";
import FileOnly from "./FileOnly";

function Directory({ id, name, children, hideEl, gap }) {
  console.log(name, hideEl);
  if (hideEl) return null;
  const [hidden, setHidden] = useState(true);
  const value = hidden ? "+" : "-";
  return (
    <div className={`directory`}>
      <div className="curr-dir" style={{ paddingLeft: `${gap}0px` }}>
        <div>{name}</div>
        <button
          className="dir-btn"
          onClick={(e) => {
            setHidden(!hidden);
          }}
        >{`[${value}]`}</button>
      </div>

      {children.map((item) => {
        if (Object.hasOwn(item, "children"))
          return (
            <Directory {...item} key={item.id} hideEl={hidden} gap={gap + 2} />
          );
        return (
          <FileOnly {...item} key={item.id} hideEl={hidden} gap={gap + 2} />
        );
      })}
    </div>
  );
}

export default Directory;
