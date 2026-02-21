import PreviewUserImage from "./sub-components/left-section/PreviewUserImage";
import PreviewContact from "./sub-components/left-section/PreviewContact";
import PreviewEducation from "./sub-components/left-section/PreviewEducation";
import PreviewSkills from "./sub-components/left-section/PreviewSkills";
import "./leftSectionCV.css";

function LeftSectionCv({ userInformation }) {
  return (
    <section className="left-section">
      <PreviewUserImage userImage={userInformation.personalInformation.image} />
      <PreviewContact userContact={userInformation.personalInformation} />
      <PreviewEducation userEducation={userInformation.education} />
      <PreviewSkills userSkills={userInformation.skills} />
    </section>
  );
}

export default LeftSectionCv;
