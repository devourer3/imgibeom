import { MobXProviderContext } from "mobx-react"
import * as React from "react"
import BaseStore from "./base-store"
import { useObserver } from "mobx-react-lite"

// export const storesContext = React.createContext({
//   baseStore: new BaseStore()
// })

// export const useStores = () => {
//   return React.useContext(MobXProviderContext);
// }

export const useStore = () => {
  const stores = React.useContext(MobXProviderContext);
  // const store = useStores();
  return useObserver(() => ({
    base: stores.base,
    default: stores.default
  }))
}
