import React from 'react';
import Paper from '@mui/material/Paper';
import './styles.scss';

export default function CalendarHeader({
    dates = []
}) {
    return (
        <section className='calendar__header'>
            {
                dates.map((date) => <Paper key={date} elevation={0}>{date} </Paper>)
            }
        </section>
    );
}