function PreviewName({ userName, professionalTitle }) {
  return (
    <div className="preview-group preview-name">
      <h2>{userName}</h2>
      <span className="profession-title">{professionalTitle}</span>
    </div>
  );
}

export default PreviewName;
