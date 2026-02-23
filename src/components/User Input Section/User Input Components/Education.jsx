import React, { useState } from "react";
import InputGroup from "./InputGroup";

function Education({ data, setUserInformation }) {
  const [active, setActive] = useState(false);

  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [id]: value,
      },
    }));
  };

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={`inputs-education form-group ${active ? "active" : ""}`}>
      <header onClick={toggleActive}>
        <h2>Highest Attained Education</h2>
      </header>
      <div className="input-group-wrapper">
        <div className="input-group">
          <div className="input-group-inner">
            <InputGroup
              id="school"
              label="School"
              inputState={data.school}
              updateState={updateData}
            />
            <InputGroup
              id="degree"
              label="Degree/Course"
              inputState={data.degree}
              updateState={updateData}
            />
            <div className="year-group">
              <InputGroup
                id="startYear"
                label="Start Year"
                inputType="text"
                inputState={data.startYear}
                updateState={updateData}
              />
              <InputGroup
                id="endYear"
                label="End Year"
                inputType="text"
                inputState={data.endYear}
                updateState={updateData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);
