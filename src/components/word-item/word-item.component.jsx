import React from 'react';
const WordItem = ({index,item,blur})=>{
    return(
        <li className='card'>
            <div className='card-content'>
                <div className="card-inner">
                <span class="num">{index}</span>
                <h3>{item.content}</h3>
                <p className={blur?`blur`:``}>{item.meaning}</p>
                </div>
            </div>
            
        </li>
    )

}


export default WordItem;