import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Calendar from '../../components/Calendar';
import { fetchAppointments } from '../../api';
import add from 'date-fns/add';
import subWeeks from 'date-fns/subWeeks';
import AppointmentDialog from '../../components/AppointmentDialog';
import { useCreateAppointment, useDeleteAppointment, useUpdateAppointment } from './hooks';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import './styles.scss';
import Loading from '../../components/Loading';
const ACTION_PREV = 'prev';
const ACTION_NEXT = 'next';

export default function Appointment(){

    const [from, setFrom] = useState(new Date());
    const [showDialog, setShowDialog] = useState(false);
    const [currentContext, setCurrentContext] = useState({});
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const { isLoading, refetch, data } = useQuery(['appointments'], fetchAppointments);

    // Create Appointment hook
    const { 
        createAppointment
    } = useCreateAppointment({
        onSuccess: () => refetch()
    });

    // Update Appointment hook
    const { 
        updateAppointment
    } = useUpdateAppointment({
        onSuccess: () => refetch()
    });

    // Delete Appointment hook
    const { 
        deleteAppointment
    } = useDeleteAppointment({
        onSuccess: () => refetch()
    });

    const dayFrom = new Date(from);
    const [to, setTo] = useState(
        add( dayFrom, {
            weeks: 1
        })
    );
    const dayTo = new Date(to);
    
    // Prev/next week navigation
    const changeWeek = (value) => {
        if (value === ACTION_NEXT) {
            const newDate = add( dayTo, {
                weeks: 1
            });

            setTo(newDate);
            setFrom(dayTo);
            return;
        }

        const newDate = subWeeks(dayFrom, 1);
        setTo(dayFrom);
        setFrom(newDate);
    };

    return (
        <section className='appointments__section'>
            { isLoading && <Loading isLoading={isLoading} /> }
            <header>
                <h1>Calendar <span>24h</span></h1>
                <Stack direction="row" spacing={1}>
                    <IconButton 
                        aria-label="AddIcon" 
                        color="primary" 
                        onClick={() => {
                            setShowDialog(true);
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                    <IconButton aria-label="ArrowBackIosNewIcon" color="primary" onClick={() => changeWeek(ACTION_PREV)}>
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton aria-label="ArrowForwardIosIcon" color="primary" onClick={() => changeWeek(ACTION_NEXT)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            </header>
            
            <AppointmentDialog open={showDialog} 
                onSubmit={() => {

                    const reminder = {
                        name,
                        date: new Date(date).toUTCString(),
                    };

                    if (currentContext.id) {
                        updateAppointment({
                            ...currentContext,
                            ...reminder,
                        })
                    } else {
                        createAppointment({
                            name,
                            date: new Date(date).toUTCString(),
                        });
                    }

                    


                    setShowDialog(false);
                }} 
                onCancel={() => setShowDialog(false)}
                reminder={{
                    name, 
                    date,
                }}
                onNameChange={setName}
                onDateChange={setDate}
            />

            <Calendar 
                appointments={data} 
                dateFrom={from} 
                dateTo={to} 
                onEditReminder={(reminder) => {
                    setCurrentContext(reminder);
                    setName(reminder.name);
                    setDate(reminder.date);
                    setShowDialog(true);
                }}
                onDeleteReminder={(reminder) => deleteAppointment(reminder.id)}
            />
        </section>
    )
}