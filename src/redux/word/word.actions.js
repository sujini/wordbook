import wordActionTypes from './word.types';
/*export const createWord = (word) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('words').add({
      ...word,
      authorName: profile.displayName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_WORD_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_WORD_ERROR' }, err);
    });
  }
};
*/
export const createWordStart = contentAndMeaning => ({
  type: wordActionTypes.CREATE_WORD_START,
  payload:contentAndMeaning
});

export const createWordSuccess = collections =>({
  type: wordActionTypes.CREATE_WORD_SUCCESS,
  payload:collections
});
export const createWordFailure = error => ({
  type: wordActionTypes.CREATE_WORD_FAILURE,
  payload:error
});

export const deleteWordStart = id => ({
  type: wordActionTypes.DELETE_WORD_START,
  payload:id
});

export const deleteWordSuccess = collections =>({
  type: wordActionTypes.DELETE_WORD_SUCCESS,
  payload:collections
});
export const deleteWordFailure = error => ({
  type: wordActionTypes.DELETE_WORD_FAILURE,
  payload:error
});


export const fetchWordsStartFromUser = (limit) => ({
  type: wordActionTypes.FETCH_WORD_START_FROM_USER,
  payload:limit
});
export const fetchWordsSuccess = collections =>({
  type: wordActionTypes.FETCH_WORD_SUCCESS,
  payload:collections
});
export const fetchWordsFailure = error => ({
  type: wordActionTypes.FETCH_WORD_FAILURE,
  payload:error
});


export const searchWordStart = (query) => ({
  type: wordActionTypes.SEARCH_WORD_START,
  payload:query
});
export const searchWordsSuccess = collections =>({
  type: wordActionTypes.SEARCH_WORD_SUCCESS,
  payload:collections
});
export const searchWordsFailure = error => ({
  type: wordActionTypes.SEARCH_WORD_FAILURE,
  payload:error
});

export const updateLimit = (limit) => ({
  type: wordActionTypes.UPDATE_WORD_LIMIT,
  payload:limit
});