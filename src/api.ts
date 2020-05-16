import { Advertiser, AddItem } from './types'

const advertisers = [
  {
    advertiser: 'add1'
  },
  {
    advertiser: 'add2'
  }
]

const adds = {
  add1: {
    uid: 'uid-1',
    img:
      'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-1.jpg?alt=media&token=9350dae5-990c-43a1-99ee-594d74533b39',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  },
  add2: {
    uid: 'uid-1',
    img:
      'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-3.jpg?alt=media&token=0a737b2b-98a8-44da-91bc-41dd21d2b906',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  },
  add3: {
    uid: 'uid-1',
    img:
      'https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-3.jpg?alt=media&token=0a737b2b-98a8-44da-91bc-41dd21d2b906',
    url:
      'https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy'
  }
}

export const getAdvertisers = (
  count: number,
  exclude: any
): Promise<Advertiser[]> => {
  console.log(count, exclude)
  return Promise.resolve(advertisers)
}

export const getAdvertise = (
  advertiserInfo: Advertiser,
  size: string
): Promise<AddItem> => {
  console.log(size)
  return Promise.resolve(adds[advertiserInfo.advertiser])
}

export const recordConversions = (uid: string): Promise<void> => {
  console.log(uid)
  return Promise.resolve()
}
