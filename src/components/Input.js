function Input({ value, className, onChange, errorMessage = "", ...props }) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => onChange && onChange(e)}
        className={`text-sm bg-white box-border outline-none w-83 h-10 border border-white rounded text-gray-80 pl-1 focus:border ${
          errorMessage !== ""
            ? "border-error focus:border-error"
            : "focus:border-brand-blue"
        } ${className}`}
        {... props}
      />
      {errorMessage && <div className="text-xs text-error mt-1">{errorMessage}</div>}
    </div>
  );
}

export default Input;
