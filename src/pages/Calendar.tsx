import { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

import Icon from '../components/Icon';

const iconstyle = "material-symbols-rounded text-xl p-1";

type SelectedCell = {
  dayIndex: number;
  hour: number;
} | null;

const Calendar = () => {
  const [selectedCell, setSelectedCell] = useState<SelectedCell>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const today = new Date();
  const startDate = startOfWeek(today, { weekStartsOn: 1 }); // Start the week on Monday

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: 17 }, (_, i) => i + 6); // Array of hours from 6 AM to 10 PM

  // Calculate the position of the current time
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const slotHeight = 40; // Assuming each hour slot is 40px (h-10 in Tailwind is roughly 2.5rem, which is 40px)
  const timePosition = (currentHour - 6) * slotHeight + (currentMinutes / 60) * slotHeight;

  const handleCellClick = (dayIndex: number, hour: number) => {
    setSelectedCell({ dayIndex, hour });
    // Add additional actions you want to trigger here
    console.log(`Cell clicked: Day ${dayIndex}, Hour ${hour}`);
  };

  // Automatically deselect the cell after 10 seconds
  useEffect(() => {
    if (selectedCell !== null) {
      const timer = setTimeout(() => {
        setSelectedCell(null);
        console.log("Cell deselected after 10 seconds");
      }, 10000); // 10 seconds

      // Cleanup the timeout if the component unmounts or if a new cell is selected
      return () => clearTimeout(timer);
    }
  }, [selectedCell]);

  // Update the current time every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 300,000 milliseconds = 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow bg-white mt-2 mb-2">
      {/* Header Row (days of the week) */}
      <div className="flex">
        <div className="w-14 border-r border-t border-b flex items-center justify-center">
          <Icon iconstyle={iconstyle} icon="sunny" />
        </div>
        <div className="grid grid-cols-7 flex-grow border-b border-t">
          {daysOfWeek.map((day, index) => {
            const currentDay = addDays(startDate, index);
            const isToday = isSameDay(currentDay, today);

            const isWeekend = index >= 5; // Index 5 and 6 correspond to Saturday and Sunday
            const bgColor = isWeekend ? 'bg-slate-100' : 'bg-white';

            return (
              <div
                key={index}
                className={`relative p-2 text-center border-r ${isToday ? 'bg-slate-300' : bgColor}`}
              >
                {day}
                <br />
                {format(currentDay, 'd. MMMM')}

                {/* Current time indicator */}
                {isToday && (
                  <div
                    className="absolute left-0 w-full border-t-2 border-red-500"
                    style={{ top: `${timePosition}px` }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Calendar Grid with Hours */}
      <div className="flex flex-grow">
        {/* Hour Column */}
        <div className="flex flex-col border-r w-14">
          {hours.map((hour) => (
            <div key={hour} className="h-10 border-b flex items-center justify-center text-xs">
              {format(new Date(0, 0, 0, hour), 'HH:00')}
            </div>
          ))}
        </div>

        {/* Days Columns */}
        <div className="grid grid-cols-7 flex-grow relative">
          {daysOfWeek.map((_, dayIndex) => {
            const isWeekend = dayIndex >= 5; // Index 5 and 6 correspond to Saturday and Sunday
            const bgColor = isWeekend ? 'bg-slate-100' : 'bg-white';
            const isToday = isSameDay(addDays(startDate, dayIndex), today); // Ensure we're matching the correct day

            return (
              <div key={dayIndex} className={`border-r h-full relative ${bgColor}`}>
                {hours.map((hour) => {
                  const isSelected = selectedCell && selectedCell.dayIndex === dayIndex && selectedCell.hour === hour;
                  const cellStyle = isSelected ? 'bg-purple-400' : 'hover:bg-slate-200';

                  return (
                    <div
                      key={hour}
                      className={`h-10 border-b ${cellStyle}`}
                      onClick={() => handleCellClick(dayIndex, hour)}
                    >
                      {/* Adjusted height */}
                    </div>
                  );
                })}
                {/* Current time indicator line */}
                {isToday && (
                  <div
                    className="absolute left-0 w-full border-t-2 border-red-500"
                    style={{ top: `${timePosition}px` }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
