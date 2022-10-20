import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import proveedorSlice from '../features/proveedores/proveedorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    proveedor: proveedorSlice,
  },
})
