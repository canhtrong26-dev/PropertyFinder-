import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type User = {
  id: number
  email: string
  role: string
}

type Credentials = {
  email: string
  password: string
}

type AuthState = {
  user: User | null
  token: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, { rejectWithValue }) => {
    const response = await fetch('https://bootcamp-auth.onschoolbootcamp.edu.vn/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const data = await response.json()
    if (!response.ok) {
      return rejectWithValue(data.error ?? 'Đăng nhập thất bại')
    }
    return {
      user: { id: data.admin.id, email: data.admin.email, role: 'admin' },
      token: data.token,
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user
      state.token = initialState.token
      state.status = initialState.status
      state.error = initialState.error
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = (action.payload as string) ?? action.error.message ?? 'Đăng nhập thất bại'
      })
  },
})

export const selectAuthUser = (state: RootState) => state.auth.user

export const { logout } = authSlice.actions
export default authSlice.reducer
