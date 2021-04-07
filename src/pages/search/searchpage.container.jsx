import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectSignCheckEnd} from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SearchPage from './searchpage.component';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>!selectSignCheckEnd(state)
});

const SearchPageContainer = compose(connect(mapStateToProps),WithSpinner)(SearchPage);
export default SearchPageContainer;