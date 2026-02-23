import InputGroup from "./InputGroup";
import { useState, useEffect, useRef, memo } from "react";

function WorkExperiences({ data, setUserInformation }) {
  const [active, setActive] = useState(false);
  const ref = useRef({ respElem: {}, workId: 0, index: 0, setFocus: false });

  useEffect(() => {
    if (!ref.current.setFocus) return;
    const workId = ref.current.workId;
    const index = ref.current.index;
    if (ref.current.respElem[workId][index]) {
      ref.current.respElem[workId][index].focus();
    } else {
      ref.current.respElem[workId][index - 1].focus();
    }

    ref.current.setFocus = false;
  }, [data]);

  const updateData = (key, value, id) => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences].map((work) => {
        return work.id !== id ? { ...work } : { ...work, [key]: value };
      }),
    }));
  };

  const addWork = () => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [
        ...prev.workExperiences,
        {
          id: crypto.randomUUID(),
          workPosition: "",
          workCompany: "",
          workStartYear: "",
          workEndYear: "",
          workResponsibilities: [{ id: crypto.randomUUID(), value: "" }],
        },
      ],
    }));
  };

  const removeWork = (workId) => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences].filter(
        (work) => work.id !== workId,
      ),
    }));
  };

  const handleKeydown = (e, workId, respId) => {
    const index = ref.current.index;
    const arrLength = data.find((work) => work.id === workId)
      .workResponsibilities.length;
    const textLength = e.target.value.length;
    // let focusElem = null;
    // const elem = ref.current.respElem[workId];

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        ref.current.setFocus = true;
        ref.current.index++;
        addResponsibility(workId, index);
        break;
      case "Backspace":
        if (textLength <= 0 && arrLength > 1) {
          e.preventDefault();
          ref.current.setFocus = true;
          removeResponsibility(workId, respId);
        }
        break;
      // case "ArrowUp":
      //   focusElem = elem[index - 1];
      //   if (focusElem) {
      //     const elemLength = focusElem.value.length;
      //     focusElem.focus();
      //     setTimeout(
      //       () => focusElem.setSelectionRange(elemLength, elemLength),
      //       0,
      //     );
      //   }
      //   break;
      // case "ArrowDown":
      //   focusElem = elem[index + 1];
      //   if (focusElem) {
      //     const elemLength = focusElem.value.length;
      //     focusElem.focus();
      //     setTimeout(
      //       () => focusElem.setSelectionRange(elemLength, elemLength),
      //       0,
      //     );
      //   }
    }
  };

  const handleFocus = (workId, index) => {
    ref.current.workId = workId;
    ref.current.index = index;
  };

  const updateResponsibility = (workId, respId, value) => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences].map((work) => {
        return work.id !== workId
          ? { ...work }
          : {
              ...work,
              workResponsibilities: [...work.workResponsibilities].map(
                (resp) => {
                  return resp.id !== respId ? { ...resp } : { ...resp, value };
                },
              ),
            };
      }),
    }));
  };

  const addResponsibility = (workId, index) => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences].map((work) =>
        work.id !== workId
          ? { ...work }
          : {
              ...work,
              workResponsibilities: [
                ...work.workResponsibilities.slice(0, index + 1),
                { id: crypto.randomUUID(), value: "" },
                ...work.workResponsibilities.slice(index + 1),
              ],
            },
      ),
    }));
  };

  const removeResponsibility = (workId, respId) => {
    setUserInformation((prev) => ({
      ...prev,
      workExperiences: [...prev.workExperiences].map((work) =>
        work.id !== workId
          ? { ...work }
          : {
              ...work,
              workResponsibilities: [...work.workResponsibilities].filter(
                (resp) => resp.id !== respId,
              ),
            },
      ),
    }));
  };

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`inputs-work-experiences form-group ${active ? "active" : ""}`}
    >
      <header onClick={toggleActive}>
        <h2>Work Experiences</h2>
      </header>
      <div className="input-group-wrapper">
        <div className="input-group">
          <div className="input-group-inner">
            <button className="btn-add-work" type="button" onClick={addWork}>
              Add Experience
            </button>

            <div className="work-experiences">
              {data.map((work, index) => (
                <div key={work.id} className="work-experience-container">
                  <header>
                    <h3>Work {index + 1}</h3>
                    <button
                      className="btn-close"
                      type="button"
                      onClick={() => removeWork(work.id)}
                    >
                      X
                    </button>
                  </header>
                  <InputGroup
                    id="workPosition"
                    label="Work Position"
                    inputState={work.workPosition}
                    updateState={(key, updateValue) => {
                      updateData(key, updateValue, work.id);
                    }}
                  />
                  <InputGroup
                    id="workCompany"
                    label="Work Company"
                    inputState={work.workCompany}
                    updateState={(key, updateValue) => {
                      updateData(key, updateValue, work.id);
                    }}
                  />
                  <div className="year-group">
                    <InputGroup
                      id="workStartYear"
                      label="Start Year"
                      inputType="text"
                      inputState={work.workStartYear}
                      updateState={(key, updateValue) => {
                        updateData(key, updateValue, work.id);
                      }}
                    />
                    <InputGroup
                      id="workEndYear"
                      label="End Year"
                      inputType="text"
                      inputState={work.workEndYear}
                      updateState={(key, updateValue) => {
                        updateData(key, updateValue, work.id);
                      }}
                    />
                    <div className="work-responsibilities-container">
                      <header>
                        <h3>Work Responsibilities</h3>
                      </header>
                      <div className="multi-input">
                        {work.workResponsibilities.map((resp, index) => (
                          <label key={resp.id}>
                            <div className="multi-input-container">
                              <textarea
                                ref={(el) => {
                                  if (!ref.current.respElem[work.id]) {
                                    ref.current.respElem[work.id] = [];
                                  }
                                  ref.current.respElem[work.id][index] = el;
                                }}
                                value={resp.value}
                                onFocus={() => handleFocus(work.id, index)}
                                onKeyDown={(e) =>
                                  handleKeydown(e, work.id, resp.id)
                                }
                                onChange={(e) =>
                                  updateResponsibility(
                                    work.id,
                                    resp.id,
                                    e.target.value,
                                  )
                                }
                              ></textarea>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WorkExperiences);
