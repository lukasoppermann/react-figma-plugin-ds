import React from "react";

import { InputProps, InputWithIconProps } from "../index";
import { Icon } from "./";

const InputComponent: React.FunctionComponent<InputProps> = ({
  className = "",
  type,
  defaultValue,
  value,
  placeholder,
  isDisabled,
  onChange,
  required,
  pattern,
}) => (
  <input
    type={type}
    className={className}
    placeholder={placeholder}
    defaultValue={defaultValue}
    value={value}
    disabled={isDisabled}
    required={required}
    pattern={pattern}
    onChange={(event) => onChange && onChange(event.target.value, event)}
  />
);

const Input: React.FunctionComponent<InputWithIconProps> = ({
  className,
  type,
  icon,
  iconColor = "black3",
  defaultValue,
  value,
  placeholder,
  isDisabled,
  onChange,
  required,
  pattern,
}) => {
  className = className || "";
  type = type || "text";
  const inputClass = "input__field";

  if (icon) {
    return (
      <div className={`input input--with-icon ${className}`}>
        <Icon name={icon} color={iconColor} isDisabled={isDisabled} />
        <InputComponent
          className={`${inputClass} ${className}`}
          type={type}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          isDisabled={isDisabled}
          required={required}
          pattern={pattern}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <div className={`input ${className}`}>
        <InputComponent
          className={`${inputClass} ${className}`}
          type={type}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          isDisabled={isDisabled}
          required={required}
          pattern={pattern}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default Input;
