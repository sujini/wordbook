import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import WordList from '../../components/word-list/word-list.component';
import CreateWord from '../../components/create-word/create-word.component';

import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import './word.styles.scss'

const WordPage =({history,match,currentUser})=> {
  useEffect(()=>{
    if (!currentUser) history.push('/');
    console.log(history.location.search.split("=")[1] )
  },currentUser);
  const handleClick = ()=>{
    history.push('/quiz');
  }
 
    
    return (
      <div className="container">
        <CreateWord/>
        <WordList/>
        <CustomButton className='btnStudy' type='button' onClick={handleClick} isbtnStudy>학습하기</CustomButton>

      </div>
    )
  
}


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
});


export default connect(mapStateToProps)(WordPage)
