import close from '../images/gray-close.svg'

function Alert({
  className = '',
  open,
  icon,
  closeIcon,
  closable,
  content,
  onClose,
  top = 'mt-6',
  ...props
}) {
  const onCloseClick = e => {
    e.stopPropagation()
    if (closable) {
      onClose && onClose(e)
    }
  }
  if (!open) return null
  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center z-10">
      <div className="w-95">
        <div
          className={`flex relative items-start justify-start rounded-sm p-3 w-full bg-brand-blue-4 ${top} ${className}`}
          {...props}
        >
          {icon && <img src={icon} alt="status" className="mr-2 w-4 h-4" />}
          <div className={`text-sm text-brand-blue mr-${closable ? 6 : 0}`}>
            {content}
          </div>
          {closable && (
            <img
              src={closeIcon || close}
              alt="close"
              className="absolute w-4 h-4 right-3"
              onClick={e => onCloseClick(e)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Alert
