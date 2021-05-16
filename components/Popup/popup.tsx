import React from "react";

interface IPopup {
  children: React.ReactNode;
}

const Button: React.FC<IPopup> = ({ children }: IPopup) => (
  <div>{children}</div>
);

export default Button;
