import * as functions from 'firebase-functions';
import * as algoliasearch from 'algoliasearch';

const env = functions.config();
console.log(env)
const client = algoliasearch('XOIA43O7CN', 'c60c5db698c1672afecda431544e9d24');
const wordsIndex = client.initIndex("words");

export const searchByParams = async (query) => {
    return new Promise(async (resolve, reject) => {
        wordsIndex.search(query, {
            attributesToRetrieve: ['content', 'meaning'],
            hitsPerPage: 5,
        })
        .then(({ hits ,e}) => {
            resolve(hits);
          });
    
      });
}