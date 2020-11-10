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

export const fetchWordStart = () => ({
  type: wordActionTypes.FETCH_WORD_START
});
export const fetchWordsStartFromUser = () => ({
  type: wordActionTypes.FETCH_WORD_START_FROM_USER
});
export const fetchWordsSuccess = collections =>({
  type: wordActionTypes.FETCH_WORD_SUCCESS,
  payload:collections
});
export const fetchWordsFailure = error => ({
  type: wordActionTypes.FETCH_WORD_FAILURE,
  payload:error
});