import { AddItem } from './types'

const advertisers = ['add1', 'add2']

const adds = {
  add1: {
    title: 'rent easy',
    uid: 'add1-uid-1-1',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6NtFnrgePbphf7Fkbt_gdVUbPotHarT8gKaBiv3OQRkc8cg-S&usqp=CAU',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy',
    size: 'banner',
    cpi: 100
  },
  add2: {
    title: 'rent easy',
    uid: 'add1-uid-1-2',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKgIVNUc_k6y-AJwnObi67GaoD0bUmRJoXId9yJ0irKc7SPJqa&usqp=CAU',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy',
    size: 'banner',
    cpi: 100
  },
  add3: {
    title: 'rent easy',
    uid: 'add1-uid-1-3',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGwi9OirYPnNTGaRMmgkkc4h2mzEAM9lLWnMVroE8TKk0oMr5G&usqp=CAU',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy',
    size: 'banner',
    cpi: 100
  }
}

// let API_URL = ''
export const getAdvertisers = async (
  count: number,
  clientId: string
): Promise<string[]> => {
  console.log(count, clientId)
  // const response = await fetch(
  //   `${API_URL}/advertisers?count=${count}&clientId=${clientId}`
  // )
  //  return response.json()
  return Promise.resolve(advertisers)
}
export const getAdvertise = async (
  advertiser: string,
  size: string
): Promise<AddItem> => {
  // const response = await fetch(
  //   `${API_URL}/advertisers/${advertiser}/advertise?size=${size}&random=true`
  // )
  // return response.json()
  console.log(size)

  return Promise.resolve(adds[advertiser])
}

export const recordConversions = async (
  uid: string,
  clientId: string
): Promise<boolean> => {
  // const response = await fetch(`${API_URL}/advertise/${uid}/conversion`,{
  //   method: 'POST',
  //   body: JSON.stringify({ clientId })
  // })
  // return response.ok;
  console.log(uid, clientId)
  return Promise.resolve(true)
}
