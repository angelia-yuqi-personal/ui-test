import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import img from "../images/select.svg";

const Option = ({ children, className, value, onSelect, ...props }) => {
  return (
    <li
      className={`h-5 hover:bg-indigo-200 pl-2 flex items-center cursor-pointer ${className}`}
      onClick={(e, index) => onSelect && onSelect(e, value, children, index)}
      {...props}
    >
      {children}
    </li>
  );
};

function Select({
  options = [],
  onChange,
  className,
  children,
  icon,
  ...props
}) {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const onSelect = (e, value, text, index) => {
    e.stopPropagation();
    setShow(false);
    setValue(text);
    onChange && onChange(value);
  };
  useClickAway(ref, () => {
    setShow(false);
  });
  return (
    <div className="relative text-xs font-body" ref={ref} {...props}>
      <div
        className={`w-35 h-7 flex justify-between items-center px-4 rounded ${className}`}
        onClick={() => setShow(!show)}
      >
        <input
          className="border-none outline-none bg-transparent w-11/12 cursor-pointer"
          value={value}
          type="text"
          placeholder="请选择"
          readOnly
        />
        <img className="w-3 h-3" src={icon || img} alt="icon" />
      </div>
      {show && (
        <div className="absolute bg-white shadow rounded mt-1 py-1 w-full">
          <ul>
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                onSelect,
                key: index,
              });
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

Select.Option = Option;

export default Select;
