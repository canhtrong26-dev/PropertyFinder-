import { useReducer } from 'react'
import UIContext from './uiContextValue'
import uiReducer, { initialUIState } from './uiReducer'

type UIProviderProps = {
  children: React.ReactNode
}

function UIProvider({ children }: UIProviderProps) {
  const [state, dispatch] = useReducer(uiReducer, initialUIState)

  return <UIContext.Provider value={{ state, dispatch }}>{children}</UIContext.Provider>
}

export default UIProvider
