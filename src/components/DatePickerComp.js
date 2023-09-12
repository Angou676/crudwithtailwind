import { forwardRef, useState, useCallback } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiTime } from "react-icons/bi";

function InputGroup6({ label, name, value, onChange, type = "text", decoration, inputClassName = "", decorationClassName = "", disabled }) {
    return (
        <div className="flex" style={{ width: '100%', }}>
            <input
                style={{
                    borderRadius: '10px 0px 0px 10px', color: '#a3a2a2',
                    width: '100%'
                }}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={label}
                aria-label={label}
                className={`
                peer block p-3 text-gray-600 bg-cyan-100  focus:border-black-400 focus:bg-cyan-100 focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300
                 ${disabled ? "bg-gray-200" : ""} ${inputClassName}
                 `}
                disabled={disabled}
            />
            <div
                className={`flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-cyan-100 border border-l-0 peer-focus:border-black-500 peer-focus:bg-cyan transition-colors duration-300 
                ${disabled ? "bg-gray-200" : ""} ${decorationClassName}`}
                style={{ borderRadius: '0px 10px 10px 0px' }}
            >
                {decoration}
            </div>
        </div>
    );
}

const CustomInputField = forwardRef(({ name, value, label, onClick, disabled, inputClassName, icon = <BiCalendar size="1rem" /> }, ref) => (
    <div onClick={onClick} ref={ref} disabled={disabled} style={{ width: '100%', }}>
        <InputGroup6
            name={name}
            value={value}
            onChange={() => null}
            label={label}
            decoration={icon}
            disabled={disabled}
            inputClassName={inputClassName}
        />
    </div>
)
);

export default CustomInputField
