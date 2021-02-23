import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollections,selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/word/word.selectors';
import {fetchWordsStartFromUser} from '../../redux/word/word.actions';
import WordItem from '../word-item/word-item.component';
import './word-list.styles.scss';
const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
}
const WordList = ({collections,fetchWordsStartFromUser})=>{
    useEffect (()=>{
        fetchWordsStartFromUser();
    },[fetchWordsStartFromUser]);
   
    
    return(
        <div>
            <ul className='card-list'>
                {
                collections && collections.map((collection,index)=>(
                    <WordItem key={collection.id} id={collection.id} index={setNum(index+1)} item={collection}/>
                    
                
                ))
            }
            </ul>
        </div>
    )

}
const mapDispatchToProps = dispatch =>({
    fetchWordsStartFromUser:()=>dispatch(fetchWordsStartFromUser())
});
const mapStateToProps = createStructuredSelector({
    collections:selectCollections
});

export default connect(mapStateToProps,mapDispatchToProps)(WordList);