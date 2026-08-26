import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Property } from '../../types/property'
import type { RootState } from '../../store/store'

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

export const fetchPropertyById = createAsyncThunk(
  'properties/fetchPropertyById',
  async (id: string) => {
    const response = await fetch(`https://crud-property.onschoolbootcamp.edu.vn/properties/${id}`)
    const data = await response.json()
    return data
  }
)

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
  propertyAdded: (state, action: PayloadAction<Property>) => {
    state.items.push(action.payload)
  },
  propertyUpdated: (state, action: PayloadAction<Property>) => {
    const index = state.items.findIndex((item) => item.id === action.payload.id)
    if (index !== -1) {
      state.items[index] = action.payload
    }
  },
  propertyRemoved: (state, action: PayloadAction<number>) => {
    state.items = state.items.filter((item) => item.id !== action.payload)
  },
},
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

export const { propertyAdded, propertyUpdated, propertyRemoved } = propertySlice.actions
export const selectPropertyItems = (state: RootState) => state.properties.items
export default propertySlice.reducer