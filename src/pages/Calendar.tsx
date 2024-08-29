import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

const Calendar = () => {
  const today = new Date();
  const startDate = startOfWeek(today, { weekStartsOn: 1 }); // Start the week on Monday

  const daysOfWeek = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];

  return (
    <>
      {/* Calendar Section */}
      <div className="flex-grow bg-white mt-4 mb-4">
        {/* Header Row (days of the week) */}
        <div className="grid grid-cols-7 border-b">
          {daysOfWeek.map((day, index) => {
            const currentDay = addDays(startDate, index);
            const isToday = isSameDay(currentDay, today);

            return (
              <div
                key={index}
                className={`p-2 text-center border-r ${isToday ? 'bg-purple-400 text-white' : ''
                  }`}
              >
                {day}
                <br />
                {format(currentDay, 'dd.MM')}
              </div>
            );
          })}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-grow">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-r border-b h-24"></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calendar;
