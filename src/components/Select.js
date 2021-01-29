import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import img from '../images/select.svg'

function Select({
  options = [],
  onChange,
  className,
  optionClassName,
  icon,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const onSelect = (e, item, index) => {
    e.stopPropagation();
    setShow(false);
    setValue(item.text);
    onChange && onChange(item.value);
  };
  useClickAway(ref, () => {
    setShow(false);
  });
  return (
    <div className="relative text-xs font-body" ref={ref}>
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
            {options.map((item, index) => (
              <li
                className={`h-5 hover:bg-indigo-200 pl-2 flex items-center cursor-pointer ${optionClassName}`}
                key={index}
                onClick={(e) => onSelect(e, item, index)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;
