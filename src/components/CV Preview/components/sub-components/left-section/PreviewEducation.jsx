import React from "react";

function PreviewEducation({ userEducation }) {
  return (
    <div className="preview-group preview-education">
      <h2>EDUCATION</h2>
      <div className="preview-content">
        <div className="education-detail">
          <h3>{userEducation.school}</h3>
        </div>
        <div className="education-detail">
          <p>{userEducation.degree}</p>
        </div>
        <div className="education-detail">
          {userEducation.startYear !== "" && userEducation.endYear !== "" && (
            <p>{`${userEducation.startYear}-${userEducation.endYear}`}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(PreviewEducation);
