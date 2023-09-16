"use client";

import clsx from "clsx";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input id={id} type={type} autoComplete={id} disabled={disabled} />
    </div>
  );
};

export default Input;
