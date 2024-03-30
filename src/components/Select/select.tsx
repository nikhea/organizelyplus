import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectDemoProps {
  placeholder: string;
  options: Option[];
  onChange?: (selectedValue: string) => void;
}

export function SelectDemo({
  placeholder,
  options,
  onChange,
}: SelectDemoProps): JSX.Element {
  const [selectedOption, setSelectedOption] = React.useState<string>("");

  const handleSelectChange = (value: any) => {
    const selectedValue = value;
    setSelectedOption(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="mt-5 ring-0 active:ring-0 focus:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
