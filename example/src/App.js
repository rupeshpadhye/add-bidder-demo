import React from 'react'
import 'add-bidder/dist/index.css'
import Content from './Content'
import { AddProvider } from 'add-bidder';

const App = () => {
  return (
    <AddProvider clientId="client-233434">
      <Content/>
    </AddProvider>
  )
 
}

export default App
