import { ThemeContext } from "./ThemeContext";
import React, { useContext } from "react";

export default function Paragraph() {
  const context = useContext(ThemeContext);
  return <div className={context.theme}>Paragraph</div>;
}
