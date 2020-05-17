# Add Bidder Demo

> This is demo client side add bidder library , client can consume this library to show
 adds on there sites

## [Demo Link](https://rupeshpadhye.github.io/add-bidder-demo/)
## Local Development

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
[Refer this repository](https://github.com/rupeshpadhye/add-bidder-demo)


## Library Install

```bash
npm install --save add-bidder
```

## Library Usage

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

## Boilerplate Code 
[create-react-library ](https://github.com/transitive-bullshit/create-react-library)
