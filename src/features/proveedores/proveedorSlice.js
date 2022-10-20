import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './proveedoresAPI'

const initialState = {
  list: [],
  entity: {},
  status: 'idle',
  error: null,
}

export const listAsync = createAsyncThunk('proveedor/fetchProveedores', async () => {
  const response = await api.fetchProveedores()
  return response
})

export const fetchProveedor = createAsyncThunk('proveedor/fetchProveedor', async id => {
  const response = await api.fetchProveedor(id)
  return response
})

export const proveedorSlice = createSlice({
  name: 'proveedor',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(listAsync.pending, state => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(listAsync.fulfilled, (state, action) => {
      state.status = 'idle'
      state.list = action.payload.data
      state.error = null
    })
    builder.addCase(listAsync.rejected, (state, action) => {
      state.status = 'idle'
      state.list = []
      state.error = action.payload.message
    })
    builder.addCase(fetchProveedor.pending, state => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchProveedor.fulfilled, (state, action) => {
      state.status = 'idle'
      state.entity = action.payload.data
      state.error = null
    })
    builder.addCase(fetchProveedor.rejected, (state, action) => {
      state.status = 'idle'
      state.entity = null
      state.error = action.payload.message
    })
  },
})

export const selectList = state => state.proveedor.list
export const selectError = state => state.proveedor.error
export const selectStatus = state => state.proveedor.status

export default proveedorSlice.reducer
