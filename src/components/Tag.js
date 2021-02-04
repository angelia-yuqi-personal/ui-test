import close from "../images/close.svg";

function Tag({
  onClick,
  onClose,
  className,
  children,
  closable,
  closeIcon,
  variant = "solid",
  ...props
}) {
  const onCloseClick = (e) => {
    e.stopPropagation();
    onClose(e);
  };
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`text-sm font-body flex justify-center items-center px-3 h-8 rounded focus:outline-none ${
        variant === "solid"
          ? "bg-brand-blue-10 border-0"
          : "bg-white border-brand-blue-60 border"
      } text-gray-80 ${className}`}
      {...props}
    >
      {children}
      {closable && (
        <img
          src={close || closeIcon}
          className="ml-2"
          alt="close"
          onClick={(e) => onCloseClick(e)}
        />
      )}
    </button>
  );
}

export default Tag;
