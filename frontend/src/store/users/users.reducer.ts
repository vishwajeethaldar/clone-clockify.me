import 
{
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SIGNUP_LOADING,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_LOGOUT,
} from './users.types'


type stateInter = {
    loading:boolean;
    error:boolean;
    token:string;   
    isAuth:boolean;
}
type actionprop = {
    type:string;
    payload:{};
}


const intialState = {
    loading:false,
    error:false,
    token:localStorage.getItem("token")||"",
    isAuth:false

}

const userReducer = (state=intialState, {type, payload}:actionprop)=>{
    switch(type){

        case USER_LOGIN_LOADING :
            return {
                ...state, loading:true, error:false
            }
        case USER_LOGIN_SUCCESS :
            // localStorage.setItem("token", payload)
            return {
                ...state, loading:false, error:false, token:payload
            }
        case USER_LOGIN_ERROR :
            return {
                ...state, loading:false, error:true
            }
        default:
            return state;
    }
}


export default userReducer