import React from "react";
import {StoreType} from "../redux/redux-store";




const StoreContext = React.createContext({} as StoreType);

export type ProviderContextType = {
    store: StoreType
    // children: React.ReactNode
}

export default StoreContext;