import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollections,selectLimit} from '../../redux/word/word.selectors';
import {fetchWordsStartFromUser,updateLimit} from '../../redux/word/word.actions';
import WordItem from '../word-item/word-item.component';
import './word-list.styles.scss';
const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
}
const WordList = ({collections,limit,fetchWordsStartFromUser})=>{
    useEffect (()=>{
        fetchWordsStartFromUser(limit);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll)
    },[limit,fetchWordsStartFromUser]);
    const handleScroll = event =>{
     
        const container = event.srcElement.scrollingElement;
        let triggerHeight = container.scrollTop + container.offsetHeight;
        
        if (Math.ceil(triggerHeight) >= container.scrollHeight) {
            console.log('update')
            fetchWordsStartFromUser(limit+6);
        }
        
    }
    
    return(
        <div onScroll={handleScroll}>
            <ul className='card-list'>
                {
                collections && collections.map((collection,index)=>(
                    <li className='card'><WordItem key={collection.id} id={collection.id} index={setNum(index+1)} item={collection} isIcon/></li>
                    
                
                ))
            }
            </ul>
        </div>
    )

}
const mapDispatchToProps = dispatch =>({
    fetchWordsStartFromUser:(limit)=>dispatch(fetchWordsStartFromUser(limit)),
    updateLimit:(limit)=>dispatch(updateLimit(limit))
});
const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
    limit:selectLimit
});

export default connect(mapStateToProps,mapDispatchToProps)(WordList);