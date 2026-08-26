import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from '../features/properties/propertySlice'
import filtersReducer from '../features/properties/filtersSlice'

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    filters: filtersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store