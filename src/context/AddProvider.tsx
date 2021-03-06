import React, { useEffect, useReducer } from 'react'
import AppReducer from './AddReducer'
import AppContext from './addContext'
import { getAdvertisers, recordConversions } from '../api'
import { AdvertiserAddMapping } from '../types'

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
      await recordConversions(uid, clientId)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchAdvisers = async (addSlots: string[]) => {
    try {
      const availableAdvertisers: string[] = await getAdvertisers(
        addSlots.length,
        clientId
      )
      const advertisersMapToAdd: AdvertiserAddMapping[] = availableAdvertisers.map(
        (a, index) => {
          return {
            advertiser: a,
            addKey: addSlots[index]
          }
        }
      )
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
  }, [])

  useEffect(() => {
    if (clientId && addSlots.length > 0) {
      fetchAdvisers(addSlots)
    }
  }, [addSlots, clientId])
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
