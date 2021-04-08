import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../redux/word/word.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SearchPage from './searchpage.component';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>selectIsCollectionFetching(state)
});

const SearchPageContainer = compose(connect(mapStateToProps),WithSpinner)(SearchPage);
export default SearchPageContainer;