import { createContext } from 'react'
import { AdvertiserAddMapping } from '../types'

interface ContextType {
  registerAdd: (id: string) => void
  addConversion: (id: string) => void
  advertisers: Array<AdvertiserAddMapping>
}

const initialContext: ContextType = {
  advertisers: [],
  registerAdd: () => {},
  addConversion: () => {}
}

const AppContext = createContext(initialContext)

export default AppContext
