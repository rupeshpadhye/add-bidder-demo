import React, { useEffect, useReducer } from 'react'
import AppReducer from './AddReducer'
import AppContext from './addContext'
import { getAdvertisers, recordConversions } from '../api'
import { Advertiser } from '../types'

type addProviderProps = {
  clientId: string
}

const initialState = {
  advertisers: [],
  addSlots: []
}
const AddProvider: React.FC<addProviderProps> = ({ clientId, children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { advertisers, addSlots } = state
  const registerAdd = (key: string) => {
    dispatch({
      type: 'GET_ADVERTISER_REQUEST',
      payload: key
    })
  }

  const addConversion = async (uid: string) => {
    try {
      await recordConversions(uid)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchAdvisers = async (addSlots: string[]) => {
    try {
      const availableAdvertisers: Advertiser[] = await getAdvertisers(
        addSlots.length,
        advertisers.map((a: Advertiser) => a.advertiser)
      )

      const advertisersMapToAdd = availableAdvertisers.map((a, index) => {
        return {
          ...a,
          addKey: addSlots[index]
        }
      })
      console.log(advertisersMapToAdd)
      dispatch({
        type: 'SET_ADVERTISERS',
        payload: advertisersMapToAdd
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!clientId) {
      console.error('clientId is required.')
    }
    if (clientId && addSlots.length > 0) {
      fetchAdvisers(addSlots)
    }
  }, [addSlots])
  return (
    <div>
      <AppContext.Provider
        value={{
          advertisers: advertisers,
          registerAdd: registerAdd,
          addConversion: addConversion
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  )
}
export default AddProvider
