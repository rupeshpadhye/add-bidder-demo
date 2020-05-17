
import React from 'react'
import { render, screen } from '@testing-library/react'
import Add from '../components/Add'
import AppContext from '../context/addContext'
jest.mock('../api')
const { getAdvertise } = require('../api')

describe('Add Mounted', () => {
  it('is dummy image shown', () => {
    expect(Add).toBeTruthy()
    expect(screen.findByTestId('add-block')).toBeTruthy()
    expect(screen.findByTestId('add-block-dummy-image')).toBeTruthy()

  })
})

describe('Add Interactions', () => {
  let Component: React.ReactElement = <div></div>
  let registerAddMock: jest.Mock<any, any>
  let dom: any
  let contextValues: any
  beforeEach(()=> {
    registerAddMock = jest.fn();
    contextValues = {
      advertisers: [{
        addKey: '12334234',
        advertiser: 'add-1',
      }],
      registerAdd: registerAddMock,
      addConversion: jest.fn()
    };
  })
  it('is add shown',  (done) => {
    getAdvertise.mockImplementationOnce(() => ({
      "title": "rent easy1",
      "uid": "add2-uid-2",
      "img": "https://firebasestorage.googleapis.com/v0/b/renteasy-3ce44.appspot.com/o/1000-3.jpg?alt=media&token=0a737b2b-98a8-44da-91bc-41dd21d2b906",
      "url": "https://www.amazon.com/Rupesh-Padhye-Rent-Easy/dp/B01M5IDOYG/ref=sr_1_1?s=mobile-apps&ie=UTF8&qid=1530965429&sr=1-1&keywords=rent+easy",
      "size": "banner",
      "cpi": 100
    }))
  
    Component = <AppContext.Provider value={contextValues}>
      <Add size="banner" addKey={'12334234'} />
    </AppContext.Provider>
     dom = render(Component)
    const { rerender } = dom
    rerender(Component)
    expect(registerAddMock.mock.calls.length).toBe(1)
    expect(screen.findByTestId('add-block-img')).toBeTruthy()
    done()
  })
})


