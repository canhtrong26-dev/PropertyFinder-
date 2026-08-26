import { useContext } from 'react'
import UIContext from '../context/uiContextValue'

function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI phải được dùng bên trong UIProvider')
  }
  return context
}

export default useUI
