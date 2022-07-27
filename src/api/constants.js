export const BASE_API_URL = 'http://localhost:3004';

export const FETCH_APPOINTMENT_URL = `${BASE_API_URL}/appointments`;
export const POST_APPOINTMENT_URL = `${BASE_API_URL}/appointments`;
export const patchAppointmentUrl = (id) => `${BASE_API_URL}/appointments/${id}`;
export const deleteAppointmentUrl = (id) => `${BASE_API_URL}/appointments/${id}`;