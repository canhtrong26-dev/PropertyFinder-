import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from '../features/properties/propertySlice'
import filtersReducer from '../features/properties/filtersSlice'
import favoritesReducer from '../features/properties/favoritesSlice'
import authReducer from '../features/auth/authSlice'

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store