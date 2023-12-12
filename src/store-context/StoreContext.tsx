import React from "react";
import {store, StoreType} from "../redux/redux-store";


const StoreContext = React.createContext({} as StoreType);

export type ProviderContextType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: React.FC<ProviderContextType> = (props) => {
    const {store, children} = props;

    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}

export default StoreContext;