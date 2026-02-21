import React from "react";

function PreviewUserImage({ userImage }) {
  return (
    <div className="preview-user-image">
      <img src={userImage} alt="" />
    </div>
  );
}

export default React.memo(PreviewUserImage);
