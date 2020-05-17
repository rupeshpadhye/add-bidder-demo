
import React from 'react'
import { render } from '@testing-library/react'
import Add from '../components/Add'
import AddProvider from '../context/AddProvider'
import { act } from 'react-dom/test-utils'
jest.mock('../api')
const { getAdvertisers } = require('../api')

describe('Add Provider', () => {

  it('is getAdvertisers called', async (done) => { 

    const promise = Promise.resolve(['add1'])
    getAdvertisers.mockImplementationOnce(() => (promise))

    const Component = 
    <AddProvider clientId="client-233434">
        <Add size="banner" />
     </AddProvider>
    await act(async () => { 
        render(Component)
    })
    expect(getAdvertisers.mock.calls.length).toBe(1)
    done()
  })
})

