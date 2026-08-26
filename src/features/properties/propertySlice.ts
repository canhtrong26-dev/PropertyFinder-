import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Property } from '../../types/property'

type PropertyState = {
  items: Property[]
  loading: boolean
  error: string | null
}

const initialState: PropertyState = {
  items: [],
  loading: false,
  error: null,
}

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
  }
)

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Có lỗi xảy ra'
      })
  },
})

export default propertySlice.reducer