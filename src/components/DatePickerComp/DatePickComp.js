import { forwardRef, useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiTime } from "react-icons/bi";

function DatePickComp(props) {
    const now = new Date();
    now.setDate(now.getDate());

    return (
        <div style={{ maxHeight: "300px", overflowY: "auto", width: '100%' }}>
            <DatePicker
                {...props}
                selected={props.selected}
                // minDate={now}
                onSelect={props.onChange}
            // renderCustomHeader={({
            //     date,
            //     decreaseMonth,
            //     increaseMonth,
            // }) => (
            //     <div>
            //         <button onClick={decreaseMonth}>Previous</button>
            //         <span>{date.toLocaleDateString()}</span>
            //         <button onClick={increaseMonth}>Next</button>
            //     </div>
            // )}
            />

            <style>
                {
                    `
                .react-datepicker {
                  background-color: black;
                }
                .react-datepicker-wrapper {
                    width: 100%;
                }
                .react-datepicker__day--disabled {
                    color: gray !important;
                }
                .react-datepicker__day:hover {
                    background-color: blue;
                    color: white;
                }
                .react-datepicker__day--selected {
                    background-color: blue;
                    color: white;
                }
                .react-datepicker__month-text,
                .react-datepicker__day-name,
                .react-datepicker__current-month,
                .react-datepicker__day,
                .react-datepicker__time-name,
                .react-datepicker__day--selected,
                .react-datepicker__day--today {
                  color: white;
                }
                .react-datepicker__header{
                    background-color:black;
                }
                react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
                    border-top: none;
                    border-bottom-color: black;
                }
                .react-datepicker__navigation{
                    top: 9px;
                }
                `
                }
            </style>
        </div>
    );
}

export default DatePickComp