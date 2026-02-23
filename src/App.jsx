import { useState } from "react";
import UserInputSection from "./components/User Input Section/UserInputSection";
import CVPreviewSection from "./components/CV Preview/CVPreviewSection";
import PageHeader from "./components/PageHeader/PageHeader";
import "./App.css";

function App() {
  const [userInformation, setUserInformation] = useState(presetData);

  return (
    <>
      <PageHeader />
      <div className="page-content">
        <UserInputSection
          userInformation={userInformation}
          setUserInformation={setUserInformation}
        />
        <CVPreviewSection userInformation={userInformation} />
      </div>
    </>
  );
}

const cleanData = {
  personalInformation: {
    name: "",
    phone: "",
    email: "",
    address: "",
    image: "",
  },
  education: {
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
  skills: [{ id: crypto.randomUUID(), value: "" }],
  professionalSummary: {
    professionalTitle: "",
    professionalDescription: "",
  },
  workExperiences: [
    {
      id: crypto.randomUUID(),
      workPosition: "",
      workCompany: "",
      workStartYear: "",
      workEndYear: "",
      workResponsibilities: [{ id: crypto.randomUUID(), value: "" }],
    },
  ],
};

const presetData = {
  personalInformation: {
    name: "John Smith",
    phone: "09123456789",
    email: "user123@gmail.com",
    address: "Something City",
    image: "",
  },
  education: {
    school: "Western Mindanao State University",
    degree: "Bachelor of Computer Science - IT",
    startYear: "2013",
    endYear: "2016",
  },
  skills: [
    { id: crypto.randomUUID(), value: "HTML" },
    { id: crypto.randomUUID(), value: "CSS" },
    { id: crypto.randomUUID(), value: "Javascript" },
    { id: crypto.randomUUID(), value: "React" },
    { id: crypto.randomUUID(), value: "Angular" },
    { id: crypto.randomUUID(), value: "MongoDB" },
    { id: crypto.randomUUID(), value: "MySql" },
    { id: crypto.randomUUID(), value: "Docker" },
  ],
  professionalSummary: {
    professionalTitle: "Web Developer",
    professionalDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat perspiciatis consequatur consectetur nemo sed? Totam quaerat, beatae iure consectetur deleniti veniam. Consequuntur, debitis quibusdam. Ipsam mollitia optio tenetur soluta!
      Sapiente suscipit labore, doloribus ut dolorum odio voluptatibus atque.`,
  },
  workExperiences: [
    {
      id: crypto.randomUUID(),
      workPosition: "Web Developer",
      workCompany: "Company 1",
      workStartYear: "2018",
      workEndYear: "2021",
      workResponsibilities: [
        {
          id: crypto.randomUUID(),
          value:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis aperiam nihil consequatur ad a ducimus ea, deleniti quos eligendi! Recusandae deleniti aliquid blanditiis dolores fuga aliquam nostrum omnis corrupti.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis aperiam nihil consequatur ad a ducimus ea, deleniti quos eligendi! Recusandae deleniti aliquid blanditiis dolores fuga aliquam nostrum omnis corrupti.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis aperiam nihil consequatur ad a ducimus ea, deleniti quos eligendi!",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      workPosition: "Web Developer",
      workCompany: "Company 2",
      workStartYear: "2021",
      workEndYear: "2025",
      workResponsibilities: [
        {
          id: crypto.randomUUID(),
          value:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis aperiam nihil consequatur ad a ducimus ea, deleniti quos eligendi! Recusandae deleniti aliquid blanditiis dolores fuga aliquam nostrum omnis corrupti.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perspiciatis aperiam nihil consequatur ad a ducimus ea, deleniti quos eligendi! Recusandae deleniti aliquid blanditiis dolores fuga aliquam nostrum omnis corrupti.",
        },
      ],
    },
  ],
};

export default App;
