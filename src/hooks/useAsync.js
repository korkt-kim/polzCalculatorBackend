import React,{useReducer} from 'react';

const initialState ={
    data:null,
    loading:false,
    error: null,
}

const reducer = (state,action) =>{
    switch (action.type){
        case 'LOADING':
            return {...state,loading:true,error:null,data:null};
        case 'SUCCESS':
            return {...state,data:action.data,loading:false,error:null};
        case 'ERROR' :
            return {...state,data:null,loading:false,error:action.error}
        default:
            return {...state}
    }
}


const useAsync = (callback) =>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const fetchData = async () =>{
        dispatch({type:'LOADING'});
        try{
            const data = await callback();
            dispatch({type:'SUCCESS',data});
        }catch(e){
            dispatch({type:'ERROR',error:e});
        }
        
    }
    return [state,fetchData];
}

export default useAsync