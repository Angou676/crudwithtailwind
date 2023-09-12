

import React, { useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const InfiniteScrollCalendar = () => {
  const customLocale = {
    headerFormat: 'MMM Do',
    weekdays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    blank: ' ',
    todayLabel: {
      long: 'Today',
    },
  };

  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const handleDateSelect = (date) => {
    console.log(date)
    setSelectedDate(date);
  };

  const arrDate = [
    new Date('2023-09-15'),
    new Date('2023-09-20'),
  ]

  return (
    <div >
      <InfiniteCalendar
        width={400}
        height={400}
        selected={selectedDate}
        locale={customLocale}
        displayOptions={{
          showHeader: false,
        }}
        onSelect={handleDateSelect}
        minDate={currentDate}
        maxDate={new Date('2023-12-31')}
        disabledDates={arrDate}
        theme={{
          selectionColor: 'blue',
          disabledColor: 'grey',
        }}
        className="custom-calendar"
      />


      <style>
        {`
            .Cal__MonthList__root {
              overflow-y: scroll !important;
              scrollbar-width: none !important;
              -ms-overflow-style: none !important;
            }

            .Cal__MonthList__root::-webkit-scrollbar {
              width: 0 !important;
              display: none !important;
            }

            .custom-calendar {
              border-radius: 10px;
            }

            .Cal__MonthList__root {
              background-color: black;
              color: white;
              border-radius: 0px 0px 10px 10px;
            }

            .Cal__Month__row.Cal__Month__partial:first-child li {
              background-color: black;

            }

            .Cal__Month__row:first-child li {
              background-color: black;
            }

            .Cal__Weekdays__root {
              background-color: black !important;
              border-radius: 10px 10px 0px 0px;

            }

            .custom-calendar .CalendarToolbar .todayButton {
              display: none;
            }

            .Cal__Day__root.Cal__Day__selected .Cal__Day__selection .Cal__Day__month {
              display: none;
            }

            .Cal__Day__root.Cal__Day__selected .Cal__Day__selection .Cal__Day__day {
              top: 0px;
            }

            .Cal__Day__root.Cal__Day__today:before {
              border-radius: 5px;
              box-shadow: none;
              border: 1px solid white;
            }

            .Cal__Day__root.Cal__Day__selected .Cal__Day__selection {
              border-radius: 5px;
            }

            .calendar-container .Day.Today .Day-content::before {
              content: '';
              display: none;
            }

            .calendar-container .InfiniteCalendar .CalendarToolbar .today-scroll-btn {
              display: none;
            }

            .Cal__Today__root.Cal__Today__chevronDown .Cal__Today__chevron {
              display: none;
              transform: none;
            }

            .Cal__Today__root.Cal__Today__chevronUp .Cal__Today__chevron {
              display: none;
              transform: none;
            }

            .Cal__Today__root.Cal__Today__chevronUp .Cal__Today__chevron {
              display: none;
            }

            .Cal__Today__root.Cal__Today__show .Cal__Today__chevron {
              display: none;
            }

        `}
      </style>
    </div>
  );
};

export default InfiniteScrollCalendar;


