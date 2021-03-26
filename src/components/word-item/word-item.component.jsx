import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Icon, InlineIcon } from "@iconify/react";
import cursorMove from '@iconify/icons-mdi/cursor-move';
import deleteIcon from '@iconify/icons-mdi/delete';
import {CardController, IconBtn}  from './word-item.styles';
import {deleteWordStart} from '../../redux/word/word.actions';

const WordItem = ({deleteWordStart,id,index,item,isIcon})=>{
    const [correctAnswer,setAnswer] = useState({correct:false});
    const {correct} =correctAnswer;
    const handleClick = () => {
        
        deleteWordStart(id);
    }
    const handleChange = (event) =>{
        const {value} = event.target;
        let bool = item.meaning===value;
      
        setAnswer({correct:bool}); 
    
      }
    return(
        
        <div className='card-content'>
            {isIcon?
            <CardController>   
                <IconBtn onClick={handleClick}><Icon icon={deleteIcon}/></IconBtn> 
            </CardController>
            :null
            }
            <div className="card-inner">
                <span className="num">{index}</span>
                <h3>{item.content}</h3>
                {isIcon || correct?
                <p>{item.meaning}</p>
                :<p></p>
                }
                {isIcon?
                null
                : <input type="text" placeholder="FILL IN THE ANSWER."  onChange={handleChange} />
                }
            </div>
        </div>
            
      
    )

}

const mapDispatchToProps = dispatch=>({
    deleteWordStart:(id)=>dispatch(deleteWordStart(id))
  })
  export default connect(null, mapDispatchToProps)(WordItem);