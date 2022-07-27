import { useMutation } from '@tanstack/react-query'
import { createAppointment, deleteAppointment, updateAppointment } from '../../api';

/**
 * Hook to create a Reminder/Appointment
 * @param {object} options 
 * @returns object
 */
export function useCreateAppointment(options = {}) {
    const { isLoading, error, mutate, onSuccess } = useMutation(createAppointment, options);

    return {
        isLoading, 
        error,
        createAppointment: mutate,
        onSuccess
    };
}

/**
 * Hook to update a Reminder/Appointment
 * @param {object} options 
 * @returns object
 */
export function useUpdateAppointment(options = {}) {
    const { isLoading, error, mutate, onSuccess } = useMutation((payload) => updateAppointment(payload.id, payload), options);

    return {
        isLoading, 
        error,
        updateAppointment: mutate,
        onSuccess
    };
}

/**
 * Hook to delete a Reminder/Appointment
 * @param {object} options 
 * @returns object
 */
export function useDeleteAppointment(options = {}) {
    const { isLoading, error, mutate, onSuccess } = useMutation(deleteAppointment, options);

    return {
        isLoading, 
        error,
        deleteAppointment: mutate,
        onSuccess
    };
}