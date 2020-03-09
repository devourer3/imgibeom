import { MobXProviderContext } from "mobx-react"
import * as React from "react"
import { useObserver } from "mobx-react-lite"

// export const storesContext = React.createContext({
//   baseStore: new BaseStore()
// })

// export const useStores = () => {
//   return React.useContext(MobXProviderContext);
// }


// https://blog.rhostem.com/posts/2019-07-22-mobx-v6-and-react-v16-8

export const useStore = () => {
  const stores = React.useContext(MobXProviderContext);
  return useObserver(() => ({
    base: stores.base,
    default: stores.default
  }))
}
