import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectSignCheckEnd} from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import QuizPage from './quiz.component';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>!selectSignCheckEnd(state)
});

const QuizPageContainer = compose(connect(mapStateToProps),WithSpinner)(QuizPage);
//const QuizPageContainer = connect(mapStateToProps)(WithSpinner(QuizPage));
export default QuizPageContainer;