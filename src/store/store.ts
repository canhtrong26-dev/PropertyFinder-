import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from '../features/properties/propertySlice'
import filtersReducer from '../features/properties/filtersSlice'
import favoritesReducer from '../features/properties/favoritesSlice'

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store