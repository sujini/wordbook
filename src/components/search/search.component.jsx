import React, {useState} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchWordStart} from '../../redux/word/word.actions';
import './search.styles.scss';





const Search = ({history}) =>{
    
    const [userSearch,setSearch] = useState({search:''});
    const {search} =userSearch;


    const handleChange = event =>{
        const {value,name} = event.target;
        setSearch({[name]:value});
        console.log(search)
    }
    const handleSubmit = event =>{
        event.preventDefault();
        history.push('/word/'+ search)

    }
    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="" placeholder="search" onChange={handleChange}/>
            </form>
        </div>
    )
};



export default withRouter(Search)