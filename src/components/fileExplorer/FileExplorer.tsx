import data from "./data";
import Directory from "./Directory";
import FileOnly from "./FileOnly";
import "./styles.css";
function FileExplorer() {
  return (
    <div className="file-explorer">
      {data.map((item) => {
        if (Object.hasOwn(item, "children"))
          return <Directory {...item} key={item.id} hideEl={false} gap={0} />;
        return <FileOnly {...item} key={item.id} hideEl={false} gap={0} />;
      })}
    </div>
  );
}

export default FileExplorer;
