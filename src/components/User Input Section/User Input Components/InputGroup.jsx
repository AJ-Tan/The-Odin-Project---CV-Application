function InputGroup({
  id,
  label = "",
  inputType = "text",
  invalidMessage,
  isRequired = false,
  inputState,
  updateState,
}) {
  return (
    <div className="input-container">
      <label>
        {label}
        {inputType !== "textarea" ? (
          <input
            id={id}
            name={id}
            type={inputType}
            required={isRequired}
            autoComplete="name"
            value={inputState}
            onChange={(e) => updateState(id, e.target.value)}
          />
        ) : (
          <textarea
            id={id}
            name={id}
            required={isRequired}
            value={inputState}
            onChange={(e) => updateState(id, e.target.value)}
          ></textarea>
        )}
        {invalidMessage && (
          <span className="invalid-message">{invalidMessage}</span>
        )}
      </label>
    </div>
  );
}

export default InputGroup;
