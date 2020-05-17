import {AddItem } from './types'

//FIXME microbundle-crl not picking custom env
const API_URL = process.env.NODE_ENV === 'development' ? 
'http://localhost:3001' : 'https://https://add-bidder-qbtzze4rda-de.a.run.app'

export const getAdvertisers =  async (
  count: number,
  exclude: any,
  clientId: string
): Promise<string []> => {
  console.log('exclude',exclude)
  const response = await fetch(`${API_URL}/advertisers?count=${count}&clientId=${clientId}`)
  return response.json()
}
export const getAdvertise = async (
  advertiser: string,
  size: string
): Promise<AddItem> => {
  const response = await fetch(`${API_URL}/advertisers/${advertiser}/advertise?size=${size}&random=true`)
  return response.json()
}

export const recordConversions = async (uid: string): Promise<boolean> => {
  const response = await fetch(`${API_URL}/advertise/${uid}/conversion`,{
    method: 'POST'
  })
  return response.ok;
}
