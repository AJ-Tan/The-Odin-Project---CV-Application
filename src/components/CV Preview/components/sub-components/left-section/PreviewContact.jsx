import React from "react";
import phoneIcon from "../../../../../assets/CV Preview/phoneIcon.svg";
import EmailIcon from "../../../../../assets/CV Preview/mailIcon.svg?react";
import locationIcon from "../../../../../assets/CV Preview/locationIcon.svg";

function PreviewContact({ userContact }) {
  return (
    <div className="preview-group preview-contact">
      <h2>CONTACT</h2>
      <div className="preview-content">
        <div className="contact-detail">
          <div className="contact-icon-container">
            <img src={phoneIcon} alt="" />
          </div>
          <p>{userContact.phone}</p>
        </div>
        <div className="contact-detail">
          <div className="contact-icon-container">
            {/* <img src={emailIcon} alt="" /> */}
            <EmailIcon />
          </div>
          <p>{userContact.email}</p>
        </div>
        <div className="contact-detail">
          <div className="contact-icon-container">
            <img src={locationIcon} alt="" />
          </div>
          <p>{userContact.address}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PreviewContact);
