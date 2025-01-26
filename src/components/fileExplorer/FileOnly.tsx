function FileOnly({ id, name, children, hideEl, gap }) {
  if (hideEl) return null;
  return (
    <div className={`file`} style={{ paddingLeft: `${gap}0px` }}>
      <div>{name}</div>
    </div>
  );
}

export default FileOnly;
