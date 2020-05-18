import {AddItem } from './types'


let API_URL='';
export const getAdvertisers =  async (
  count: number,
  clientId: string
): Promise<string []> => {
  //console.log('exclude',exclude)
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

export const recordConversions = async (uid: string, clientId: string): Promise<boolean> => {
  const response = await fetch(`${API_URL}/advertise/${uid}/conversion`,{
    method: 'POST',
    body: JSON.stringify({clientId})
  })
  return response.ok;
}
