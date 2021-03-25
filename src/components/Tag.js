import close from '../images/close.svg'
import grayClose from '../images/gray-close.svg'

function Tag({
  onClick,
  onClose,
  className = '',
  children,
  closable,
  closeIcon,
  color = 'primary',
  size = 'large',
  ...props
}) {
  const onCloseClick = e => {
    e.stopPropagation()
    onClose && onClose(e)
  }
  return (
    <button
      onClick={e => onClick && onClick(e)}
      className={`flex justify-center items-center rounded-sm focus:outline-none border border-solid ${
        size === 'small'
          ? 'text-2xs'
          : size === 'medium'
          ? 'text-xs'
          : 'text-sm'
      } ${size === 'small' ? 'h-4' : size === 'medium' ? 'h-6' : 'h-8'} ${
        size === 'small' ? 'px-1' : size === 'medium' ? 'px-2' : 'px-3'
      } ${
        color === 'primary'
          ? 'bg-brand-blue border-brand-blue text-white'
          : color === 'secondary'
          ? 'bg-white border-gray-20 text-gray-80'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
      {closable && (
        <img
          src={closeIcon || (color === 'primary' ? close : grayClose)}
          className={`ml-1 w-${size === 'small' ? '2' : '3'} h-${
            size === 'small' ? '2' : '3'
          }`}
          alt="close"
          onClick={e => onCloseClick(e)}
        />
      )}
    </button>
  )
}

export default Tag
