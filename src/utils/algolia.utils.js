import * as algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.REACT_APP_ALGOLIA_ID, process.env.REACT_APP_ALGOLIA_ADMIN_KEY);
const wordsIndex = client.initIndex("words");

export const searchByParams = async (query) => {
    return new Promise(async (resolve, reject) => {
        wordsIndex.search(query, {
            attributesToRetrieve: ['meaning','content'],
            hitsPerPage: 5,
        })
        .then(({ hits},e) => {
            if(e){
                reject(e);
            }else{
                resolve(hits);
            }
            
          });
    
      });
}