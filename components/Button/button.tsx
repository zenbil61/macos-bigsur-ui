import React from "react";
// import "./button.scss";

interface IButton {
  type?: string;
  width?: number;
  size?: string;
  disabled?: boolean;
  block?: boolean;
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<IButton> = ({
  type = "primary",
  size,
  disabled,
  block,
  children,
  onClick,
  ...props
}: IButton) => {
  const btnClass = `btn 
    ${type} 
    ${block ? "block" : ""}
    ${disabled ? "disabled" : ""} 
    ${size ? `btn-${size}` : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={btnClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
