import {takeLatest,put,all,call} from 'redux-saga/effects';
import {firestore,createWordDocument,getCurrentUser,convertWordsnapshotToMap} from '../../firebase/firebase.utils';
import {createWordSuccess,createWordFailure,fetchWordsSuccess,fetchWordsFailure} from './word.actions';
import wordActionTypes from './word.types';

export function* ceateWord({payload:{content,meaning}}){
    try{
        
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        const wordRef = yield call(createWordDocument,userAuth,{content,meaning});
        const snapshot = yield wordRef.where('uid', '==', userAuth.uid).get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);
        yield put(createWordSuccess(wordsMap));
    }catch(error){
        yield put(createWordFailure(error));
    }
}



export function* fetchWordsAsyncFromUser(){
    try{
        
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        console.log(userAuth.uid)
       
        const wordRef = firestore.collection('words');
        const snapshot = yield wordRef.where('uid', '==', userAuth.uid).get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);
        yield put(fetchWordsSuccess(wordsMap));
    }catch(error){
        yield put(fetchWordsFailure(error.message));
    }
}

export function* fetchWordsAsync(){
    try{
        const wordRef = firestore.collection('words');
        const snapshot = yield wordRef.get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);
        yield put(fetchWordsSuccess(wordsMap));
    }catch(error){
        yield put(fetchWordsFailure(error.message));
    }
}
export function* fetchWordsStartFromUser(){
    yield takeLatest(wordActionTypes.FETCH_WORD_START_FROM_USER,fetchWordsAsyncFromUser)
}
export function* fetchWordsStart(){
    yield takeLatest(wordActionTypes.FETCH_WORD_START,fetchWordsAsync)
}
export function* onCreateWordStart(){
    yield takeLatest(wordActionTypes.CREATE_WORD_START,ceateWord);
}
export function* wordSagas(){
    yield all([call(onCreateWordStart),call(fetchWordsStart),call(fetchWordsStartFromUser)]);
}