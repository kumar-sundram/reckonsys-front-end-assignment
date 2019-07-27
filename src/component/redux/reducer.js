let login = JSON.parse(localStorage.getItem("login"))

let initialState 
console.log("reduc",login)
if(login){
    initialState={isAuthenticated:true,user:login.user}
}else{
    initialState={isAuthenticated:false}
}

export const userReducer = (state=initialState,action = {})=>{
    switch (action.type){
        case 'SET_USER': 
        return {
            isAuthenticated:true,
            user:action.user
        }
        case 'REMOVE_USER': 
        return {
            isAuthenticated:false,
        }
        default : return state
    }
}