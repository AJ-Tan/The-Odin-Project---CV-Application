import { useEffect, useRef, memo } from "react";

function Skills({ data, setUserInformation }) {
  const inputRef = useRef({ el: [], index: 0, id: null });
  useEffect(() => {
    if (inputRef.current.el[inputRef.current.index]) {
      inputRef.current.el[inputRef.current.index].focus();
    } else {
      inputRef.current.el[inputRef.current.index - 1]?.focus();
    }
  }, [data]);

  const updateData = (e, updateId) => {
    setUserInformation((prev) => ({
      ...prev,
      skills: [...prev.skills].map(({ id, value }) =>
        id === updateId ? { id, value: e.target.value } : { id, value },
      ),
    }));
  };

  const handleFocus = (index) => {
    inputRef.current.index = index;
  };

  const handleKeydown = (e, id) => {
    const index = inputRef.current.index;
    const elem = inputRef.current.el;
    let focusElem = null;
    const arrLength = data.length;
    const textLength = e.target.value.length;
    switch (e.key) {
      case "Enter":
        addSkill(index);
        inputRef.current.index++;
        break;
      case "Backspace":
        if (textLength <= 0 && arrLength > 1) {
          e.preventDefault();
          removeSkill(id);
        }
        break;
      case "ArrowUp":
        focusElem = elem[index - 1];
        if (focusElem) {
          const elemLength = focusElem.value.length;
          focusElem.focus();
          setTimeout(
            () => focusElem.setSelectionRange(elemLength, elemLength),
            0,
          );
        }
        break;
      case "ArrowDown":
        focusElem = elem[index + 1];
        if (focusElem) {
          const elemLength = focusElem.value.length;
          focusElem.focus();
          setTimeout(
            () => focusElem.setSelectionRange(elemLength, elemLength),
            0,
          );
        }
    }
  };

  const addSkill = (index) => {
    setUserInformation((prev) => ({
      ...prev,
      skills: [
        ...prev.skills.slice(0, index + 1),
        { id: crypto.randomUUID(), value: "" },
        ...prev.skills.slice(index + 1),
      ],
    }));
  };

  const removeSkill = (removeId) => {
    setUserInformation((prev) => ({
      ...prev,
      skills: prev.skills.filter(({ id }) => id !== removeId),
    }));
  };

  return (
    <div className="inputs-skills form-group">
      <header>
        <h2>Skills</h2>
      </header>
      <div className="multi-input">
        {data.map(({ id, value }, index) => (
          <label key={id}>
            <div className="multi-input-container">
              <input
                id={id}
                key={id}
                ref={(el) => (inputRef.current.el[index] = el)}
                value={value}
                onChange={(e) => updateData(e, id)}
                onKeyDown={(e) => handleKeydown(e, id)}
                onFocus={() => handleFocus(index)}
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default memo(Skills);
