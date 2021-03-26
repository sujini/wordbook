import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import WordItem from '../../components/word-item/word-item.component';


import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/word/word.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import Slider from "react-slick";
import './slick.scss';
import './slick-theme.scss'; 
import './quiz.styles.scss';

const QuizPage =({history,currentUser,collections})=> {

  
  useEffect(()=>{
    if (!currentUser) history.push('/');
  },[currentUser, history]);

  const settings = {
    dots: true,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 1, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요
    
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 768, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const setNum = (_num)=>{
    return _num<10?'0'+_num:_num;
  }
  
  return (
    <div className="container quiz">
    <Slider {...settings}> 
    {
        collections && collections.map((collection,index)=>(
            <div className="card">
              <WordItem key={collection.id} id={collection.id} item={collection} index={setNum(index+1)}/>
              
            </div>
        
        ))
    }
    </Slider>


    </div>
  )
  
}


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    collections:selectCollections
});

export default connect(mapStateToProps)(QuizPage)
