import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectSignCheckEnd} from '../../redux/user/user.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import HomePage from './homepage.component';

const mapStateToProps = createStructuredSelector({
    isLoading:state=>!selectSignCheckEnd(state)
});

const HomePageContainer = compose(connect(mapStateToProps),WithSpinner)(HomePage);
export default HomePageContainer;