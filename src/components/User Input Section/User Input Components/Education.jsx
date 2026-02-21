import React from "react";
import InputGroup from "./InputGroup";

function Education({ data, setUserInformation }) {
  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [id]: value,
      },
    }));
  };

  return (
    <div className="inputs-education form-group">
      <header>
        <h2>Highest Attained Education</h2>
      </header>
      <div className="input-group">
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
  );
}

export default React.memo(Education);
