import { Provider } from "mobx-react"
import React from "react"
import BaseStore from './src/stores/base-store'
import DefaultStore from "./src/stores/default-store"

export default ({element}) =>
  (<Provider
    base = {BaseStore}
    default = {DefaultStore}>
    {element}
  </Provider>)
