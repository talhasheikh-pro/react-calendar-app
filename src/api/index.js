
import apiClient from '../clients/api';
import { FETCH_APPOINTMENT_URL, patchAppointmentUrl, deleteAppointmentUrl, POST_APPOINTMENT_URL } from './constants';

/**
 * Fetches all appointments
 * 
 * @returns Promise
 */
export const fetchAppointments = () => {
    return apiClient.get(FETCH_APPOINTMENT_URL)
            .then((res) => res.json());
};

/**
 * Creates a new appointment
 * 
 * @param {object} payload 
 * @returns 
 */
export const createAppointment = (payload) => {
    return apiClient.post(POST_APPOINTMENT_URL, payload)
            .then((res) => res.json());
};

/**
 * Updates an appointment
 * 
 * @param {int} id 
 * @param {object} payload 
 * @returns Promise
 */
export const updateAppointment = (id, payload) => {
    return apiClient.patch(patchAppointmentUrl(id), payload)
            .then((res) => res.json());
};

/**
 * Deletes an appointment
 * 
 * @param {int} id 
 * @returns Promise
 */
export const deleteAppointment = (id) => {
    return apiClient.delete(deleteAppointmentUrl(id))
            .then((res) => res.json());
};