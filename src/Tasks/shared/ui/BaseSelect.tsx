import { Container, FloatingLabel, FormSelect } from "react-bootstrap";
import { MenuPlacement, SingleValue } from "react-select";
import Select from "react-select";
import { Contain } from "../../../styles";

export interface FormOption<T> {
  readonly value: T;
  readonly label: string;
}
interface SelectProps<T> {
  onChange: (option: FormOption<T>) => void;
  value?: FormOption<T> | null;
  label?: string;
  options: FormOption<T>[];
  menuPlacement?: MenuPlacement;
}

export function BaseSelect<T>({
  onChange,
  value,
  label = "",
  options,
  menuPlacement = "auto",
}: SelectProps<T>) {
  return (
    <Contain>
      <Select 
        options={options}
        defaultValue={options[0]}
        onChange={onChange as (single: SingleValue<FormOption<T>>) => void}
        value={value}
        isClearable
        menuPlacement={menuPlacement}
      />
    </Contain>
  );
}
