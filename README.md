# Add Bidder Demo[Demo Link](https://rupeshpadhye.github.io/add-bidder-demo/)

> This is demo client side add bidder library , client can consume this library to show
 adds on there sites

## BoilerPlate Code 
[boiler plate code is taken from create-react-library ](https://github.com/transitive-bullshit/create-react-library)

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
yarn start # runs create-react-app dev server
```
## Add Bidder API Dependency 
[Refer instructions given in ](https://github.com/rupeshpadhye/add-bidder-demo)


## Library Install

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