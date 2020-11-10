import {all,call} from 'redux-saga/effects';

import {userSagas} from './user/user.sagas';
import {wordSagas} from './word/word.sagas';
export default function* rootSaga(){
    yield all([
        call(wordSagas),
        call(userSagas)
        
    ])
}