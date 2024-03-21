import React, {ComponentType, Suspense} from 'react';
import {Preloader} from "../components/common/preloaders/Preloader";

export function WithSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        <Suspense fallback={<Preloader/>}>
            <Component {...props as T} />
        </Suspense>
    }
};

export default WithSuspense;