import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    yellow_900: "bg-yellow-900 text-white-A700",
    white_A700: "bg-white-A700 text-blue-500",
    gray_100: "bg-gray-100 text-light_blue-900",
    blue_500: "bg-blue-500 text-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-3.5", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_900", "white_A700", "gray_100", "blue_500"]),
};

export { Button };
