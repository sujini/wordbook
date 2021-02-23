import React from 'react';
import { connect } from 'react-redux';
import { Icon, InlineIcon } from "@iconify/react";
import cursorMove from '@iconify/icons-mdi/cursor-move';
import deleteIcon from '@iconify/icons-mdi/delete';
import {CardController, IconBtn}  from './word-item.styles';
import {deleteWordStart} from '../../redux/word/word.actions';

const WordItem = ({deleteWordStart,id,index,item,blur})=>{
    const handleClick = () => {
        
        deleteWordStart(id);
    }
    return(
        <li className='card'>
            <div className='card-content'>
                <CardController>
                    
                    <IconBtn onClick={handleClick}><Icon icon={deleteIcon}/></IconBtn>
                   
                </CardController>
                <div className="card-inner">
                <span className="num">{index}</span>
                <h3>{item.content}</h3>
                <p className={blur?`blur`:``}>{item.meaning}</p>
                </div>
            </div>
            
        </li>
    )

}

const mapDispatchToProps = dispatch=>({
    deleteWordStart:(id)=>dispatch(deleteWordStart(id))
  })
  export default connect(null, mapDispatchToProps)(WordItem);