import React from 'react';
import CalendarHeader from '../CalendarHeader';
import format from 'date-fns/format';
import CalendarTimeSlots from '../CalendarTimeSlots';
import { getAllDatesBetween } from '../utils';

export default function Calendar({
    appointments = [],
    dateFrom,
    dateTo,
    onEditReminder,
    onDeleteReminder,
}) {
    const dayFrom = new Date(dateFrom);
    const dayTo = new Date(dateTo);
    
    // Parse the following week based on `dayFrom` 
    const dates = getAllDatesBetween(dayFrom, dayTo);

    return (
        <div className='calendar__container'>
            <CalendarHeader dates={dates} />
            <CalendarTimeSlots 
                dates={dates} 
                appointments={appointments} 
                onEditSlot={(reminder) => onEditReminder(reminder)}
                onDeleteSlot={(reminder) => onDeleteReminder(reminder)}
            />
        </div>
    );
}