import React from "react";
import InputGroup from "./InputGroup";

function PersonalInformation({ data, setUserInformation }) {
  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [id]: value,
      },
    }));
  };

  return (
    <div className="inputs-personal-information form-group">
      <header>
        <h2>Personal Information</h2>
      </header>
      <div className="input-group">
        <InputGroup
          id="name"
          label="Name"
          inputState={data.name}
          updateState={updateData}
        />
        <InputGroup
          id="phone"
          label="Phone"
          inputState={data.phone}
          updateState={updateData}
        />
        <InputGroup
          id="email"
          label="Email"
          inputType="email"
          inputState={data.email}
          updateState={updateData}
        />
        <InputGroup
          id="address"
          label="Address"
          inputState={data.address}
          updateState={updateData}
        />
      </div>
    </div>
  );
}

export default React.memo(PersonalInformation);
