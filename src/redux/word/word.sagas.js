import {takeLatest,put,all,call} from 'redux-saga/effects';
import {firestore,createWordDocument,deleteWordDocument,getCurrentUser,convertWordsnapshotToMap} from '../../utils/firebase.utils';
import {searchByParams} from '../../utils/algolia.utils';
import {createWordSuccess,createWordFailure,deleteWordSuccess,deleteWordFailure,fetchWordsSuccess,fetchWordsFailure,searchWordsSuccess,searchWordsFailure,updateLimit} from './word.actions';
import wordActionTypes from './word.types';

export function* ceateWord({payload:{content,meaning}}){
    try{
        
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        const wordRef = yield call(createWordDocument,userAuth,{content,meaning});
        const snapshot = yield wordRef.where('uid', '==', userAuth.uid).orderBy('createdAt','desc').get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);
        yield put(createWordSuccess(wordsMap));
    }catch(error){
        yield put(createWordFailure(error));
    }
}
export function* deleteWord({payload:id}){
    try{
        
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        const wordRef = yield call(deleteWordDocument,userAuth,id);
        const snapshot = yield wordRef.where('uid', '==', userAuth.uid).orderBy('createdAt','desc').get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);
        yield put(deleteWordSuccess(wordsMap));
    }catch(error){
        yield put(deleteWordFailure(error));
    }
}


export function* fetchWordsAsyncFromUser({payload:limit}){
    try{
        
        const userAuth = yield getCurrentUser();
        if(!userAuth)return;
        
        const wordRef = firestore.collection('words').where('uid', '==', userAuth.uid).orderBy('createdAt','desc').limit(limit||6);
        const snapshot = yield wordRef.get();
        const wordsMap = yield call(convertWordsnapshotToMap,snapshot);

        if(wordsMap.length<limit)return;
        yield put(updateLimit(limit));
        yield put(fetchWordsSuccess(wordsMap));
    }catch(error){
        yield put(fetchWordsFailure(error.message));
    }
}


export function* searchWordsAsync({payload:query}){
    try{
        console.log(query)
        const wordsMap = yield call(searchByParams,query);
        yield put(searchWordsSuccess(wordsMap));
    }catch(error){
        yield put(searchWordsFailure(error.message));
    }
}
export function* fetchWordsStartFromUser(){
    yield takeLatest(wordActionTypes.FETCH_WORD_START_FROM_USER,fetchWordsAsyncFromUser)
}

export function* searchWordsStart(){
    yield takeLatest(wordActionTypes.SEARCH_WORD_START,searchWordsAsync)
}
export function* onCreateWordStart(){
    yield takeLatest(wordActionTypes.CREATE_WORD_START,ceateWord);
}

export function* onDeleteWordStart(){
    yield takeLatest(wordActionTypes.DELETE_WORD_START,deleteWord);
}

export function* wordSagas(){
    yield all([call(onCreateWordStart),call(onDeleteWordStart),call(fetchWordsStartFromUser),call(searchWordsStart)]);
}