import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import WordList from '../../components/word-list/word-list.component';
import CreateWord from '../../components/create-word/create-word.component';

import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import './word.styles.scss'

const WordPage =({history,currentUser})=> {
  useEffect(()=>{
    if (!currentUser) history.push('/signin');
  },currentUser);
 
    
    return (
      <div className="container">
        <CreateWord/>
        <WordList/>

      </div>
    )
  
}


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
});


export default connect(mapStateToProps)(WordPage)
