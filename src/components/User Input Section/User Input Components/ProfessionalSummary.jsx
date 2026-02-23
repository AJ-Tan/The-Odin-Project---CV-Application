import React, { useState } from "react";
import InputGroup from "./InputGroup";

function ProfessionalSummary({ data, setUserInformation }) {
  const [active, setActive] = useState(false);

  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      professionalSummary: {
        ...prev.professionalSummary,
        [id]: value,
      },
    }));
  };

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`inputs-professional-summary form-group ${active ? "active" : ""}`}
    >
      <header onClick={toggleActive}>
        <h2>Professional Summary</h2>
      </header>
      <div className="input-group-wrapper">
        <div className="input-group">
          <div className="input-group-inner">
            <InputGroup
              id="professionalTitle"
              label="Professional Position"
              inputState={data.professionalTitle}
              updateState={updateData}
            />
            <InputGroup
              id="professionalDescription"
              label="Professional Summary"
              inputType="textarea"
              inputState={data.professionalDescription}
              updateState={updateData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProfessionalSummary);
