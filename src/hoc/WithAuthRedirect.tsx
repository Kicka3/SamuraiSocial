import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../src/redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent;
}
