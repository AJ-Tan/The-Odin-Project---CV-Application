function PreviewWorkExperience({ workExperience }) {
  return (
    <div className="preview-group preview-work">
      <h2>WORK EXPERIENCES</h2>
      <ul className="work-content">
        {workExperience.map((work) => (
          <li key={work.id} className="work-group">
            <header className="work-header">
              <h3 className="work-header-group">
                <span className="work-title">{work.workPosition}</span>
                <span className="work-year">{`${work.workStartYear}-${work.workEndYear}`}</span>
              </h3>
              <span className="work-company">{work.workCompany}</span>
            </header>
            <ul className="work-responsibilities">
              {work.workResponsibilities.map((workResp) => (
                <li key={workResp.id}>{workResp.value}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviewWorkExperience;
