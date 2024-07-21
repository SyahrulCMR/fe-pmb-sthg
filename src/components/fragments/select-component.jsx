"use client";
import Select from "react-select";

function SelectComponent({
  options,
  placeholder,
  handleChange = () => {},
  isDisabled = false,
  required = false,
  name = "",
}) {
  return (
    <Select
      key={placeholder}
      instanceId={placeholder}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      isDisabled={isDisabled}
      required={required}
      name={name}
    />
  );
}

export default SelectComponent;
