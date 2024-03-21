import React, {Suspense} from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import {MyPostsContainer} from "./components/profile/myPosts/MyPostsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "../src/components/login/Login";
import UsersContainer from "../src/components/users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeAppTC} from "./redux/app-reducer/app-reducer";
import {RootReduxStoreType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloaders/Preloader";


const DialogsContainer = React.lazy(() => import ("../src/components/dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import ("./components/profile/ProfileContainer"))


type AppPropsType = MapDispatchToPropsType & MapStateToPropsType;

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.InitializeAppTC();
    }

    render() {

        //Добавить нормальную крутилку

        if (!this.props.initialized) {
            return <Preloader isFetching={this.props.isFetching}/>
        }

        return (
            <div className="App-wrapper">
                <div className="contentWrapper">
                    <HeaderContainer/>
                </div>

                <div className="mainContentWrapper">
                    <Sidebar/>

                    <div>
                        <Route path={'/dialogs'}
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <DialogsContainer/>
                                   </Suspense>
                               }}
                        />
                        <Route path={'/profile/:userId?'}
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <ProfileContainer/>
                                   </Suspense>
                               }}
                        />

                        <Route path={'/users'}
                               render={() => {
                                   return <Suspense fallback={<Preloader/>}>
                                       <UsersContainer/>
                                   </Suspense>
                               }}
                        />

                        <Route path={'/login'}
                               render={() =>
                                   <Login/>
                               }/>

                        <Route path={'/register'}
                               render={() =>
                                   <h1>Register page</h1>
                               }/>

                        <Route path={'/posts'} component={MyPostsContainer}/>
                    </div>

                </div>
            </div>

        );
    }
}

type MapDispatchToPropsType = {
    InitializeAppTC: () => void
}
type MapStateToPropsType = {
    initialized: boolean
    isFetching: boolean
}
const mapStateToProps = (state: RootReduxStoreType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        isFetching: state.usersPage.isFetching,
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {InitializeAppTC}))(App);
