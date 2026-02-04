import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevMonth}
          className="p-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <h2 className="text-3xl font-bold text-gray-800">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={nextMonth}
          className="p-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-4">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center font-bold text-gray-500 text-lg uppercase tracking-wider py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
        {days.map((day) => {
          const isToday = isSameDay(day, new Date());
          const isCurrentMonth = isSameMonth(day, monthStart);

          return (
            <div
              key={day.toString()}
              className={`
                h-32 p-2 flex flex-col items-start justify-start cursor-pointer transition-colors
                ${!isCurrentMonth ? "bg-gray-50 text-gray-400" : "bg-white text-gray-800"}
                ${isToday && isCurrentMonth ? "bg-blue-50" : "hover:bg-gray-50"}
              `}
            >
              <span
                className={`text-sm font-semibold rounded-full w-8 h-8 flex items-center justify-center
                  ${isToday ? "bg-blue-600 text-white shadow-sm" : ""}
                `}
              >
                {format(day, "d")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
