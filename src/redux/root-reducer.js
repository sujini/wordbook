import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import wordReducer from './word/word.reducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist:[]
}

const rootReducer = combineReducers({
   user:userReducer,
   word:wordReducer
});

export default persistReducer(persistConfig,rootReducer);