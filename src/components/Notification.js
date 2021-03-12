import close from "../images/gray-close.svg";

function Notification({
  className = "",
  open,
  closable = true,
  closeIcon,
  onClose,
  title,
  content,
  actions,
  ...props
}) {
  const onCloseClick = (e) => {
    e.stopPropagation();
    if (closable) {
      onClose && onClose(e);
    }
  };
  if (!open) return null;
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-60 transation flex justify-center items-center z-10">
      <div
        className={`relative overflow-auto flex flex-col items-center z-20 w-70 max-h-52 rounded-sm bg-white shadow-common p-6 ${className}`}
        {...props}
      >
        {closable && (
          <img
            src={closeIcon || close}
            className="absolute w-4 h-4 top-2 right-2"
            onClick={(e) => onCloseClick(e)}
            alt="close"
          />
        )}
        {title && <div className="text-base text-black mb-0.5">{title}</div>}
        <div className="text-sm text-gray-40">{content}</div>
        {actions && <div>{actions}</div>}
      </div>
    </div>
  );
}

export default Notification;
