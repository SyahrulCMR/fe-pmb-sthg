"use client";
import Select from "react-select";

function SelectComponent({
  options,
  placeholder,
  handleChange = () => {},
  isDisabled = false,
}) {
  return (
    <Select
      key={placeholder}
      instanceId={placeholder}
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      isDisabled={isDisabled}
    />
  );
}

export default SelectComponent;
