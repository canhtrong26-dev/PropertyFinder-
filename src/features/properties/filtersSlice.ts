import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type FiltersState = {
  city: string
  type: string
  status: string
  searchText: string
  minPrice: number | undefined
  maxPrice: number | undefined
  minBedrooms: number | undefined
}

const initialState: FiltersState = {
  city: 'all',
  type: 'all',
  status: 'all',
  searchText: '',
  minPrice: undefined,
  maxPrice: undefined,
  minBedrooms: undefined,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    setMinPrice: (state, action: PayloadAction<number | undefined>) => {
      state.minPrice = action.payload
    },
    setMaxPrice: (state, action: PayloadAction<number | undefined>) => {
      state.maxPrice = action.payload
    },
    setMinBedrooms: (state, action: PayloadAction<number | undefined>) => {
      state.minBedrooms = action.payload
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    resetFilters: (state) => {
      state.city = 'all'
      state.type = 'all'
      state.status = 'all'
      state.searchText = ''
      state.minPrice = undefined
      state.maxPrice = undefined
      state.minBedrooms = undefined
    },
  },
})

export const { setCity, setType, setStatus, setMinPrice, setMaxPrice, setMinBedrooms, setSearchText, resetFilters } = filtersSlice.actions

export const selectFilteredProperties = (state: RootState) => {
  const items = state.properties.items
  const filters = state.filters

  return items.filter((property) => {
    if (filters.status !== 'all' && property.status !== filters.status) return false
    if (filters.minPrice !== undefined && property.price < filters.minPrice) return false
    if (filters.maxPrice !== undefined && property.price > filters.maxPrice) return false
    if (filters.minBedrooms !== undefined && property.beds < filters.minBedrooms) return false
    if (filters.searchText !== '' && !property.address.toLowerCase().includes(filters.searchText.toLowerCase())) return false
    return true
  })
}

export default filtersSlice.reducer