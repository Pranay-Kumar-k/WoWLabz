import React from 'react'
import { Redirect ,Route} from 'react-router-dom'
import Auth from "../components/Auth";

const PrivateRoute = ({component:Component,...rest}) =>{
    console.log(Auth.isAuthenticated)
  return(
   <Route {...rest} render={props => {
       if(Auth.isAuthenticated()) {
           return <Component {...props} />
       }
       else <Redirect to="/" />
   }} />
  )
}
export {PrivateRoute}