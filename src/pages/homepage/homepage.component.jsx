


import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollections,selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/word/word.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {fetchWordStart} from '../../redux/word/word.actions';
import WordItem from '../../components/word-item/word-item.component';

const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
}
const HomePage = ({collections,fetchWordStart,currentUser})=>{
    useEffect (()=>{
        fetchWordStart();
    },[fetchWordStart]);
   
    
    return(
        <div>
            <ul className='card-list'>
                {
                collections && collections.map((collection,index)=>(
                    <WordItem key={collection.id} index={setNum(index+1)} item={collection} blur={currentUser?false:true}/>
                    
                
                ))
            }
            </ul>
        </div>
    )

}
const mapDispatchToProps = dispatch =>({
    fetchWordStart:()=>dispatch(fetchWordStart())
});
const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
    currentUser:selectCurrentUser
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);