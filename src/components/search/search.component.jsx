import React, {useState} from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {searchWordStart} from '../../redux/word/word.actions';
import './search.styles.scss';





const Search = ({history,searchWordStart}) =>{
    
    const [userSearch,setSearch] = useState({search:''});
    const {search} =userSearch;


    const handleChange = event =>{
        const {value,name} = event.target;
        setSearch({[name]:value});
        console.log(search)
    }
    const handleSubmit = event =>{
        event.preventDefault();
        searchWordStart(search);
        history.push('/word/'+ search);
    }
    return(
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="" placeholder="search" onChange={handleChange}/>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch =>({
    searchWordStart:(query)=>dispatch(searchWordStart(query))
});


export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
  )(Search);