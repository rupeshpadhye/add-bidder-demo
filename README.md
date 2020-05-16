# Add-bidder Demo

> This is demo client side add bidder library , client can consume this library to show
 adds on there sites

## Install

```bash
npm install --save add-bidder
```

## Usage

```tsx
import React, { Component } from 'react'
import { AddProvider, Add } from 'add-bidder';
import 'add-bidder/dist/index.css'

class App extends Component {
  render() {
    return (
         <AddProvider clientId="client-233434">
          <Add size="banner"/>
         </AddProvider>
    )
  }
}
```