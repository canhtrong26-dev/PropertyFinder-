import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type FavoritesState = {
  ids: string[]
}

const initialState: FavoritesState = {
  ids: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    favoriteToggled: (state, action: PayloadAction<string>) => {
      const propertyId = action.payload
      if (!state.ids.includes(propertyId)) {
        state.ids.push(propertyId)
      } else {
        state.ids = state.ids.filter((id) => id !== propertyId)
      }
    },
  },
})

export const selectFavoriteProperties = (state: RootState) => {
  const favoriteIds = state.favorites.ids
  const items = state.properties.items
  return items.filter((property) => favoriteIds.includes(String(property.id)))
}

export const { favoriteToggled } = favoritesSlice.actions
export default favoritesSlice.reducer