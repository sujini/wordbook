


import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollections,selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/word/word.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {fetchWordStart} from '../../redux/word/word.actions';
import WordItem from '../../components/word-item/word-item.component';
import {ShowSignUp} from '../../uifunctions/popup.functions';

const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
}
const HomePage = ({history,collections,fetchWordStart,currentUser})=>{
    useEffect(()=>{
        if (currentUser) history.push('/word');
    },currentUser);
    
    const handleClick = () => {
        ShowSignUp();
        
    }
    
    return(
        <div>
            <button onClick={handleClick}>
                단어장 만들기
            </button>
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