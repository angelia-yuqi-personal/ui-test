function Button({ onClick, className, children, ...props }) {
  return (
    <button
      onClick={(e) => onClick  && onClick(e)}
      className={`text-sm flex justify-center items-center focus:outline-none bg-brand-blue w-60 h-10 rounded text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
