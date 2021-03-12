function Button({
  onClick,
  className = "",
  children,
  size = "large",
  color = "primary",
  disabled = false,
  width,
  ...props
}) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`${
        size === "medium" ? "text-xs" : "text-sm"
      } flex justify-center items-center focus:outline-none rounded-sm border border-solid ${
        disabled
          ? "text-white bg-gray-20 cursor-not-allowed border-gray-20"
          : color === "secondary"
          ? "text-brand-blue bg-white cursor-pointer border-brand-blue"
          : "bg-brand-blue text-white cursor-pointer border-brand-blue"
      } ${
        !disabled &&
        `${
          color === "secondary"
            ? "hover:border-brand-blue-80 hover:text-brand-blue-80"
            : "hover:border-brand-blue-80 hover:bg-brand-blue-80"
        }`
      } w-${width ? width : "auto"} h-${size === "medium" ? "8" : "10"} ${
        !width ? "px-4" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
