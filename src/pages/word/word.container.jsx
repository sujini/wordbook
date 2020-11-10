import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectSignCheckEnd} from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import WordPage from './word.component';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>!selectSignCheckEnd(state)
});

const WordPageContainer = compose(connect(mapStateToProps),WithSpinner)(WordPage);
//const WordPageContainer = connect(mapStateToProps)(WithSpinner(WordPage));
export default WordPageContainer;