"use client";
import Select from "react-select";

function SelectComponent({
  options,
  placeholder,
  handleChange = () => {},
  isDisabled = false,
  required = false,
  name = "",
  defaultValue
}) {
  return (
    <Select
      key={placeholder}
      instanceId={placeholder}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      isDisabled={isDisabled}
      defaultValue={defaultValue}
      required={required}
      name={name}
    />
  );
}

export default SelectComponent;
