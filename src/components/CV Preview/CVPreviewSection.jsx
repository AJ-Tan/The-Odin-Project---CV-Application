import LeftSectionCv from "./components/LeftSectionCV";
import RightSectionCv from "./components/RightSectionCV";
import "./cvPreviewSectionStyles.css";

function CVPreview({ userInformation }) {
  return (
    <section className="cv-preview-section">
      <div className="cv-preview">
        <LeftSectionCv userInformation={userInformation} />
        <RightSectionCv userInformation={userInformation} />
      </div>
    </section>
  );
}

export default CVPreview;
