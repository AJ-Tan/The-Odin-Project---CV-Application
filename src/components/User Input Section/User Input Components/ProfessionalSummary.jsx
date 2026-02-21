import React from "react";
import InputGroup from "./InputGroup";

function ProfessionalSummary({ data, setUserInformation }) {
  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      professionalSummary: {
        ...prev.professionalSummary,
        [id]: value,
      },
    }));
  };

  return (
    <div className="inputs-professional-summary form-group">
      <header>
        <h2>Professional Summary</h2>
      </header>
      <div className="input-group">
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
  );
}

export default React.memo(ProfessionalSummary);
