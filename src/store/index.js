import { configureStore } from '@reduxjs/toolkit'
import appointmentReducer from '../views/appointment/appointmentSlice'

export default configureStore({
  reducer: {
    appointment: appointmentReducer,
  }
})