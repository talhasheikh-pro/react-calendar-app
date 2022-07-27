import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';

export default function AppointmentDialog({
    open = false,
    onSubmit = () => {},
    onCancel = () => {},
    onNameChange,
    onDateChange,
    reminder = {},
}){
    return (
    <Dialog open={open}>
        <DialogTitle>Appointment Reminder</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                value={reminder.name}
                onChange={(e) => onNameChange(e.target.value)}
                sx={{
                    marginBottom: 4,
                }}
                inputProps={{
                    maxLength: 30,
                }}
            />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Date"
                        onChange={(date) => onDateChange(date)}
                        value={reminder.date}
                    />
                </LocalizationProvider>

        </DialogContent>
        <DialogActions>
            <Button onClick={() => onSubmit()}>Save</Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );
}