import React, { useState } from "react";
import InputGroup from "./InputGroup";

function PersonalInformation({ data, setUserInformation }) {
  const [active, setActive] = useState(true);

  const updateData = (id, value) => {
    setUserInformation((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        [id]: value,
      },
    }));
  };
  console.log(data);
  const uploadOnchange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);

    updateData("image", file);
  };

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`inputs-personal-information form-group ${active ? "active" : ""}`}
    >
      <header onClick={toggleActive}>
        <h2>Personal Information</h2>
      </header>
      <div className="input-group-wrapper">
        <div className="input-group">
          <div className="input-group-inner">
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
            <div className="input-container input-photo">
              <label>
                Profile Picture{" "}
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={uploadOnchange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PersonalInformation);
