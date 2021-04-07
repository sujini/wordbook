const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const env = functions.config();

const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const wordsIndex = client.initIndex("words"); // <-- Index name

exports.algoliaWordsSync = functions
    .firestore.document("words/{doc}").onWrite( (change, _context) => {
      const oldData = change.before;
      const newData = change.after;
      const data = newData.data();
      const objectID = newData.id; // <-- prop name is important

      if (!oldData.exists && newData.exists) {
        // creating
        return wordsIndex.saveObject(Object.assign({}, {
          objectID,
        }, data));
      } else if (!newData.exists && oldData.exists) {
        // deleting
        return wordsIndex.deleteObject(objectID);
      } else {
        // updating
        return wordsIndex.saveObject(Object.assign({}, {
          objectID,
        }, data));
      }
    });
