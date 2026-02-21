import PreviewName from "./sub-components/right-section/PreviewName";
import PreviewProfession from "./sub-components/right-section/PreviewProfession";
import PreviewWorkExperience from "./sub-components/right-section/PreviewWorkExperiences";
import "./rightSectionCV.css";

function RightSectionCv({ userInformation }) {
  return (
    <div className="right-section">
      <PreviewName
        userName={userInformation.personalInformation.name}
        professionalTitle={
          userInformation.professionalSummary.professionalTitle
        }
      />
      <PreviewProfession
        professionalDescription={
          userInformation.professionalSummary.professionalDescription
        }
      />
      <PreviewWorkExperience workExperience={userInformation.workExperiences} />
    </div>
  );
}

export default RightSectionCv;
