export type UIState = {
  theme: 'light' | 'dark'
  isSidebarOpen: boolean
}

export type UIAction = { type: 'TOGGLE_THEME' } | { type: 'TOGGLE_SIDEBAR' }

export const initialUIState: UIState = {
  theme: 'light',
  isSidebarOpen: true,
}

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen }
    default:
      return state
  }
}

export default uiReducer
