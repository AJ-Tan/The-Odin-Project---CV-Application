import "./userInputSectionStyles.css";
import PersonalInformation from "./User Input Components/PersonalInformation";
import Education from "./User Input Components/Education";
import Skills from "./User Input Components/Skills";
import ProfessionalSummary from "./User Input Components/ProfessionalSummary";
import WorkExperiences from "./User Input Components/WorkExperiences";

function UserInputSection({ userInformation, setUserInformation }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="user-input-section">
      <form onSubmit={handleSubmit}>
        <PersonalInformation
          data={userInformation.personalInformation}
          setUserInformation={setUserInformation}
        />
        <Education
          data={userInformation.education}
          setUserInformation={setUserInformation}
        />
        <Skills
          data={userInformation.skills}
          setUserInformation={setUserInformation}
        />
        <ProfessionalSummary
          data={userInformation.professionalSummary}
          setUserInformation={setUserInformation}
        />
        <WorkExperiences
          data={userInformation.workExperiences}
          setUserInformation={setUserInformation}
        />
      </form>
    </section>
  );
}

export default UserInputSection;
