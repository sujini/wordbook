import wordActionTypes from './word.types';

const INITIAL_STATE = {
    collections : null,
    searchCollections:null,
    isFetching:false,
    error:null,
    limit:6
}

const wordReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case wordActionTypes.UPDATE_WORD_LIMIT:
            return{
                ...state,
                limit:action.payload
            }
        case wordActionTypes.CREATE_WORD_START:
            return{
                ...state,
                isFetching:true,
                error:null
            }
        case wordActionTypes.CREATE_WORD_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload,                
                error:null
            }
        case wordActionTypes.CREATE_WORD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
        case wordActionTypes.DELETE_WORD_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload,                
                error:null
            }
        case wordActionTypes.DELETE_WORD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
     
        case wordActionTypes.SEARCH_WORD_START:
            return{
                ...state,
                isFetching:true,
                error:null
            }
        case wordActionTypes.FETCH_WORD_START_FROM_USER:
            return{
                ...state,
                isFetching:true,
                error:null,
                limit:action.payload
            }
        case wordActionTypes.FETCH_WORD_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload,
                error:null
            }
        
        case wordActionTypes.FETCH_WORD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
        case wordActionTypes.SEARCH_WORD_SUCCESS:
            return{
                ...state,
                isFetching:false,
                searchCollections:action.payload,
                error:null
            }
        case wordActionTypes.SEARCH_WORD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
        default:
            return state;

    }
}

export default wordReducer;