import React from "react";

function PreviewSkills({ userSkills }) {
  return (
    <div className="preview-group preview-skills">
      <h2>SKILLS</h2>
      <div className="preview-content">
        <ul className="preview-skill">
          {userSkills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(PreviewSkills);
