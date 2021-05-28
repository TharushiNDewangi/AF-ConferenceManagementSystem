import axios from "../helpers/axios";
import { authConstants } from "./constants"
//login function
export const login = (user) => {

    console.log(user);

    return async (dispatch)=>{

        //database need part 
        dispatch({type : authConstants.LOGIN_REQUEST});
         const res = await axios.post('/seller/signin',{
                ...user
         });

         
         if(res.status === 200){
             const { token,user } = res.data;
             localStorage.setItem('token' , token);
            
             localStorage.setItem('user', JSON.stringify(user));
             dispatch({
                 type: authConstants.LOGIN_SUCCESS,
                 payload: {
                     token, user
                 }
             });
         }else{
             if(res.status === 400){
                 dispatch({
                     type: authConstants.LOGIN_FAILURE,
                     payload: { error: res.data.error}
                 });
             }
         }
      
    }
}
//if userLogged in to the system
export const isUserLoggedIn = () =>{
    return async dispatch => {
        const token = localStorage.getItem('token');
      if(token){
         
          const user = JSON.parse(localStorage.getItem('user'));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
                token, user
            }
        });
      }else{
        dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: 'Failed to login'}
        });
      }
        
    }
}
//signout function
export const signout = () =>{
    return async dispatch =>{
        dispatch({ type: authConstants.LOGIN_REQUEST});
        const res = await axios.post('/seller/signout');

        if(res.status === 200){
            localStorage.clear();
        dispatch({  type:authConstants.LOGOUT_SUCCESS });
        }else{
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload:{ error: res.data.error}
            })

        }

        
    }
}