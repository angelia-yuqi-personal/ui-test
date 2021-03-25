function Input({
  value,
  className = '',
  onChange,
  width = 'w-60',
  errorMessage = '',
  ...props
}) {
  return (
    <div>
      <input
        value={value}
        onChange={e => onChange && onChange(e)}
        className={`text-sm bg-white outline-none ${width} h-10 border border-white rounded-sm text-gray-80 pl-3 focus:border ${
          errorMessage !== ''
            ? 'border-error focus:border-error'
            : 'focus:border-brand-blue'
        } ${className}`}
        {...props}
      />
      {errorMessage && (
        <div className="text-xs text-error mt-1">{errorMessage}</div>
      )}
    </div>
  )
}

export default Input
