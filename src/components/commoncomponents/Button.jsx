import React from "react";

const Button = ({
  text,
  bgColor = "#7678ED",
  textColor = "#FFFFFF",
  border = "none",
  font = "Commissioner",
  fontSize = "16px",
  fontWeight = 500,
}) => {
  const isTransparent = bgColor === "transparent" || bgColor === "#transparent";

  return (
    <button
      className={`py-3 px-6 transition-all duration-300 ease-in-out cursor-pointer
      ${isTransparent
        ? "bg-transparent text-[#7678ED] border border-[#7678ED] hover:bg-[#7678ED] hover:text-white"
        : "bg-[#7678ED] text-white hover:bg-transparent hover:text-[#7678ED] hover:border hover:border-[#7678ED]"
      }`}
      style={{
        fontFamily: font,
        fontSize: fontSize,
        fontWeight: fontWeight,
        border: border,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
