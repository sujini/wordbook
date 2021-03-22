import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import './header.styles.scss';

const Header = ({currentUser,signOutStart}) =>(
    <div className='header'>
        <Link className='logo-container' to="/"> 
            HOME
        </Link>
        <div className='options'>
            <Link className='option' to='/word'>WORD</Link>
            {currentUser?
            <Link className='option' onClick={signOutStart}>SIGN OUT</Link>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    signOutStart:()=>dispatch(signOutStart())
});
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);