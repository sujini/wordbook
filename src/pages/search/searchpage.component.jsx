import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSearchCollections} from '../../redux/word/word.selectors';
import {searchWordStart} from '../../redux/word/word.actions';
import './searchpage.styles.scss';

const SearchPage = ({match,searchWordStart,searchCollections})=>{
    useEffect (()=>{
        console.log(match.params.search)
        searchWordStart(match.params.search);
    },[searchWordStart]);
    return(
        <div className="container">
            <div className="searchpage"> 
            
                <ul className='search-list'>
                    {
                    searchCollections && searchCollections.length>0?
                        searchCollections.map((searchCollection)=>(
                        <li className='card' key={searchCollection.objectID}><h3>{searchCollection.content}</h3>{searchCollection.meaning}</li>
                        ))
                        :
                        <li className="nodata">nodata</li>
                    
                    }                    
                </ul>
                
            </div>
        </div>
    )

}
const mapDispatchToProps = dispatch =>({
    searchWordStart:(query)=>dispatch(searchWordStart(query))
});
/*
const mapStateToProps = (state,ownProps)=>({
    searchCollections:selectSearchCollections(ownProps.match.params.search)(state)
});
*/
const mapStateToProps = createStructuredSelector({
    searchCollections:selectSearchCollections
});
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);