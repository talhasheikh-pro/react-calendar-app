import format from 'date-fns/format';

/**
 * Transforms appointments for the calendar
 * @param {array} appointments 
 * @returns object
 */
export function transformAppointments(appointments = []){
    const transformedAppointments = {};

    appointments.map((appointment) => {
        const date = new Date(appointment.date);
        const key = `${format(date, 'd-M-k')}-${parseInt(format(date, 'k'))+1}`

        if (!Array.isArray(transformedAppointments[key]))
            transformedAppointments[key] = [];

        transformedAppointments[key].push(appointment);
    });

    return transformedAppointments;
}