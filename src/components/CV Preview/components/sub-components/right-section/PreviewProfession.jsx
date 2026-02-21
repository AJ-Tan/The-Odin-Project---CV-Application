function PreviewProfession({ professionalDescription }) {
  return (
    <div className="preview-group preview-profession">
      <h2>PROFESSIONAL SUMMARY</h2>
      <div className="profession-content">
        <p>{professionalDescription}</p>
      </div>
    </div>
  );
}

export default PreviewProfession;
