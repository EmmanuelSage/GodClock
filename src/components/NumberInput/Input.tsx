import React from "react";
import "./NumberInput.css";

interface InputType {
  min?: string;
  max?: string;
  placeholder: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const InputForm = ({
  min = "1",
  max = "100",
  name = "number",
  value,
  placeholder = "hour",
  onChange,
  onSubmit,
}: InputType) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <input
          type="number"
          min={min}
          max={max}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="input-button"></button>
    </form>
  );
};

export default InputForm;
