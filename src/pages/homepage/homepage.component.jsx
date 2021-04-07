import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import WordItem from '../../components/word-item/word-item.component';
import {ShowSignUp} from '../../uifunctions/popup.functions';
import './homepage.styles.scss';

const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
}
const HomePage = ({history,currentUser})=>{
    useEffect(()=>{
        if (currentUser) history.push('/word');
    },currentUser);
    
    const handleClick = () => {
        ShowSignUp();
        
    }
    
    return(
        <div className="homepage"> 
           
            <div className="container">
                <h2>나의 암기 사춘기</h2>
                <p>
                    개인 단어장 생성해보고 학습해보세요~!
                </p>
                <CustomButton onClick={handleClick}>
                    단어장 만들기
                </CustomButton>
            </div>
            
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
});

export default connect(mapStateToProps)(HomePage);