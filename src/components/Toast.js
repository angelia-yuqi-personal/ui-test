import React, {useEffect} from 'react'

function Toast({
  className = '',
  open,
  icon,
  title,
  content,
  autoHideDuration = 2000,
  type = 'block',
  onClose,
  top = 'mt-6',
  ...props
}) {
  useEffect(() => {
    if (open) setTimeout(() => onClose && onClose(), autoHideDuration)
  }, [open, autoHideDuration, onClose])
  if (!open) return null
  if (type === 'block') {
    return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-20">
        <div
          className={`flex flex-col items-center justify-center rounded-sm bg-black bg-opacity-60 p-3 w-35 max-h-52 shadow-common ${className}`}
          {...props}
        >
          {icon && <img src={icon} alt="status" className="w-13 h-13 mb-2" />}
          {title && (
            <div className="text-base text-white font-medium mb-0.5">
              {title}
            </div>
          )}
          <div className="text-xs text-gray-20">{content}</div>
        </div>
      </div>
    )
  } else if (type === 'line' || !title) {
    return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center z-10">
        <div
          className={`flex items-center justify-center h-10 px-4 max-w-sm rounded-sm bg-black bg-opacity-60 shadow-common ${top} ${className}`}
          {...props}
        >
          {icon && <img src={icon} alt="status" className="mr-2 w-6 h-6" />}
          <div className="text-base text-white">{content}</div>
        </div>
      </div>
    )
  }
  return null
}

export default Toast
