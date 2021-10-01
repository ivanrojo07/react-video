const reducer = (state,action)=>{
    switch (action.type) {
        case "SET_FAVORITE":
            
            return {
                ...state,
                mylist:[...state.mylist, action.payload]
            };

        case "DELETE_FAVORITE":
            return {
                ...state,
                mylist:[...state.mylist.filter(function(value,index,array){
                    console.log({value, index, array})
                    return value.id !== action.payload.id
                })]
            }
        
        case "LOGIN_REQUEST":
            return {
                ...state,
                user:action.payload
            }

        case "LOGOUT_REQUEST":
            return {
                ...state,
                user:{},
                mylist:[]
            }

        case "REGISTER_REQUEST":
            return {
                ...state,
                user:action.payload
            }

        case "GET_VIDEO_SOURCE":
            return {
                ...state,
                playing: state.trends.find(item=>item.id === Number(action.payload))
                    || state.original.find(item=>item.id === Number(action.payload))
                    || {}
            }
    
        default:
            return state;
    }
}

export default reducer