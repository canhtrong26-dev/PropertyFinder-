import { createContext } from 'react'
import type { UIState, UIAction } from './uiReducer'

type UIContextValue = {
  state: UIState
  dispatch: React.Dispatch<UIAction>
}

const UIContext = createContext<UIContextValue | undefined>(undefined)

export default UIContext
