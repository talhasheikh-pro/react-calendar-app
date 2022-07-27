import React, { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import './styles.scss';
import { transformAppointments } from './transformers';
const HOURS_FORMAT = 24;

export default function CalendarTimeSlots({
    appointments = [],
    dates = [],
    onEditSlot,
    onDeleteSlot,
}) {
    const transformedAppointments = transformAppointments(appointments);
    return (
        <section className='calendar__timeslots'>
            {
                Array.from({
                    length: HOURS_FORMAT
                }, (_, n) => {
                    return (
                        <div key={`time_${++n}`}>
                            <span elevation={0}>
                                {++n}
                            </span>
                            <div className='calendar__timeslots__row'>
                                {
                                    dates.map((date, i) => {
                                        const key = `${format(new Date(date), 'd-M')}-${n}-${(n)+1}`;
                                        const AppointmentCards = transformedAppointments[key] && transformedAppointments[key].map((slot, i) => 
                                            <Box 
                                                className="calendar__slot"
                                                elevation={0}
                                                key={`${slot.name}_${i}`}>

                                                    <div>{slot.name}</div>
                                                    <div>{format(new Date(slot.date), `MM/dd/yyyy h:m a`)}</div>

                                                    {/* Actions */}
                                                    <Stack direction="row" spacing={1}>
                                                        <IconButton aria-label="BorderColorIcon" color="primary"  onClick={() => onEditSlot(slot)}>
                                                            <BorderColorIcon />
                                                        </IconButton>
                                                        <IconButton aria-label="DeleteOutlineIcon" color="primary" onClick={() => onDeleteSlot(slot)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Stack>
                                            </Box>
                                        );

                                        return (
                                            <Paper variant='outlined' key={`slot_${date}_${i}`}>
                                                {AppointmentCards}
                                            </Paper>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}

CalendarTimeSlots.props = {
    dates: PropTypes.array.isRequired,
    appointments: PropTypes.array.isRequired,
};