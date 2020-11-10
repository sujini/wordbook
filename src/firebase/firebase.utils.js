
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { cps } from 'redux-saga/effects';

const config= {
    apiKey: "AIzaSyCiOvCSbY7Le_sz-AlM_zxk_A4tWCoW5g8",
    authDomain: "wordbook-c7d53.firebaseapp.com",
    databaseURL: "https://wordbook-c7d53.firebaseio.com",
    projectId: "wordbook-c7d53",
    storageBucket: "wordbook-c7d53.appspot.com",
    messagingSenderId: "983028184348",
    appId: "1:983028184348:web:5c8fa8062aa05f8c14b6d9",
    measurementId: "G-D22170SBM3"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
        
      if(!snapShot.exists){
          const {displayName,email} =userAuth;
          const createdAt = new Date();
          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })

          }catch(error){
              console.log('error creating user',error.message)

          }
      }
      return userRef;

  }

  export const createWordDocument = async (userAuth, word,additionalData) => {
    if(!userAuth) return;
    const wordRef = firestore.collection('words');
    const createdAt = new Date();
    try{
        await wordRef.add({
            ...word,
            createdAt,
            uid:userAuth.uid,
            ...additionalData
        })

    }catch(error){
        console.log('error creating word',error.message)

    }
  
    return wordRef;

  }
  export const convertWordsnapshotToMap = words => {
    const transformedWord = words.docs.map( doc =>{
        const {content,meaning,uid} = doc.data();
        return{
            id:doc.id,
            content,
            meaning,
            uid
        }
    });
    console.log(transformedWord);
    return transformedWord;
    /*
    return transformedWord.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
    */
  }

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      console.log(collectionRef);
      const batch = firestore.batch();
      objectsToAdd.forEach(obj=>{
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef,obj);
      });
      return await batch.commit();
  }

  export const convertCollectionSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map( doc =>{
          const {title,items} = doc.data();
          return{
              routeName:encodeURI(title.toLowerCase()),
              id:doc.id,
              title,
              items
          }
      });
      console.log(transformedCollection);
      return transformedCollection.reduce((accumulator,collection)=>{
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      },{});
  };

  export const getCurrentUser = () => {
      return new Promise((resolve,reject) => {
          const unsubscribe  =auth.onAuthStateChanged(userAuth=>{
              unsubscribe();
              resolve(userAuth);
          },reject)
      })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle = () =>auth.signInWithPopup(googleProvider);

  export default firebase;