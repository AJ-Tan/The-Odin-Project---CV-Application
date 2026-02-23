import React from "react";

function PreviewUserImage({ userImage }) {
  return (
    <div className="preview-user-image">
      <img
        src={
          userImage
            ? userImage
            : "https://ivestp.net/media/photos/2022/user-default2.png"
        }
        alt=""
      />
    </div>
  );
}

export default React.memo(PreviewUserImage);
