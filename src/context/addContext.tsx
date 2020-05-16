import { createContext } from 'react'
import { Advertiser } from '../types'

interface ContextType {
  registerAdd: (id: string) => void
  addConversion: (id: string) => void
  advertisers: Array<Advertiser>
}

const initialContext: ContextType = {
  advertisers: [],
  registerAdd: () => {},
  addConversion: () => {}
}

const AppContext = createContext(initialContext)

export default AppContext
