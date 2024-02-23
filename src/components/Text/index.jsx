import React from "react";

const sizeClasses = {
  txtInterRegular14Bluegray300: "font-inter font-normal",
  txtInterRegular14Bluegray200: "font-inter font-normal",
  txtInterRegular14Lightblue900: "font-inter font-normal",
  txtInterRegular14Bluegray600: "font-inter font-normal",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtInterRegular20Bluegray60001: "font-inter font-normal",
  txtInterRegular13Lightblue900: "font-inter font-normal",
  txtInterRegular32Bluegray60001: "font-inter font-normal",
  txtInterRegular48: "font-inter font-normal",
  txtInterRegular16Bluegray600: "font-inter font-normal",
  txtInterRegular16Bluegray800: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterRegular14Bluegray60001: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterRegular32Bluegray800: "font-inter font-normal",
  txtInterBold16Bluegray600: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterRegular13Bluegray200: "font-inter font-normal",
  txtInterRegular13Bluegray500: "font-inter font-normal",
  txtInterRegular13Red400: "font-inter font-normal",
  txtInterRegular13Bluegray600: "font-inter font-normal",
  txtInterRegular16Blue500: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
