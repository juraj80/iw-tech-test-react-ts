import React, { useEffect, useState } from "react";

interface CustomDropdownProps {
  filteredOptions: string[];
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOption: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  filteredOptions,
  onOptionChange,
  selectedOption,
}) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setOptions(filteredOptions);
  }, [filteredOptions]);

  return (
    <select defaultValue={selectedOption} onChange={onOptionChange}>
      <option value="">Select an authority</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
