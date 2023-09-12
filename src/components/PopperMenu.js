import React, { useState, useRef, useEffect } from 'react';
import { createPopper } from '@popperjs/core';

const PopperMenu = ({ data, deleteEmployeeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popperElement = useRef(null);
  const referenceElement = useRef(null);
  let popperInstance = null;

  const togglePopper = () => {
    setIsOpen(!isOpen);
  };

  const closePopper = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      popperInstance = createPopper(referenceElement.current, popperElement.current, {
        placement: 'right-start',
      });
    } else {
      // Cleanup the popper instance when it's not open
      if (popperInstance) {
        popperInstance.destroy();
      }
    }

    return () => {
      // Cleanup the popper instance when the component unmounts
      if (popperInstance) {
        popperInstance.destroy();
      }
    };
  }, [isOpen]);

  const options = [
    { label: 'View', iconClass: 'fa fa-eye' },
    { label: 'Edit', iconClass: 'fa fa-pencil' },
    { label: 'Delete', iconClass: 'fa fa-trash' },
  ];

  const handleOptionClick = (option) => {
    // Implement the logic for handling each option here
    // For example, you can trigger different actions for View, Edit, and Delete
    console.log(`Clicked on ${option.label}`);
    closePopper();
  };

  return (
    <td className="relative px-6 py-4 whitespace-no-wrap">
      <i
        className="fa fa-ellipsis-v cursor-pointer"
        aria-hidden="true"
        onClick={togglePopper}
        ref={referenceElement}
      ></i>

      {isOpen && (
        <div
          className="z-50 bg-white border border-gray-300 absolute mt-2 py-2 w-24 rounded-md shadow-lg"
          ref={popperElement}
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => {
                handleOptionClick(option)
                deleteEmployeeHandler(data.id)
              }}
            >
              <i className={option.iconClass} aria-hidden="true"></i> &nbsp;<span> {option.label}</span>
            </div>
          ))}
        </div>
      )}
    </td>
  );
};

export default PopperMenu;
