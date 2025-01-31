import React, { useRef } from "react";
interface FileOnlyProps {
  id: string;
  name: string;
  hideEl: boolean;
  gap: number;
}
const FileOnly: React.FC<FileOnlyProps> = ({ id, name, hideEl, gap }) => {
  const a = useRef<{ a: string; b: number } | null>();

  // a.current.
  if (hideEl) return null;
  return (
    <div className={`file`} style={{ paddingLeft: `${gap}0px` }}>
      <div>{name}</div>
    </div>
  );
};

export default FileOnly;
