import { FC } from "react";
import classnames from "classnames";

interface CustomInputProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  inputRef?: any;
  inputFull?: boolean;
  value?: string;
  errors?: any;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const style = {
  input: `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-violet-500 block w-full p-2.5`,
  mainInputStyle: ` bg-[#f1f1f1] outline-none text-[#9a9a9a]`,
  inputHalf: `w-[80%]`,
  inputFull: ` w-full`,
  curve: `rounded-[10px]`,
  rounded: `rounded-[25px]`,
  bold: `font-bold`,
  isWhiteBg: `border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-pink-500 `,
  isBlackBg: `border border-[#C4C4C4] border-solid bg-[#2b2b2b] text-white placeholder-white  `,
  borderBottom: ` border-bottom border-t-0 border-l-0 border-r-0 border-b-2  py-[1px] px-[2px]`,
  errors: ``,
};

const Input: FC<CustomInputProps> = ({
  type,
  name,
  id,
  onChange,
  inputFull,
  errors,

  placeholder,
  required,
  disabled,
  inputRef,
  value,
}) => {
  let input = {
    [`${style.input}`]: true,
    [`${style.inputFull}`]: inputFull,
    // [`${style.inputHalf}`]: inputHalf,
    // [`${style.curve}`]: isCurve,
    // [`${style.rounded}`]: rounded,
    // [`${style.bold}`]: bold,
    // [`${style.isWhiteBg}`]: isWhiteBg,
    // [`${style.isBlackBg}`]: isBlackBg,
    // [`${style.borderBottom}`]: borderBottom,
  };
  return (
    <input
      className={classnames(input)}
      disabled={disabled}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      {...inputRef}
      value={value}
    />
  );
};

export default Input;
