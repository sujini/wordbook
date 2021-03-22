import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {ShowSignUp} from '../../uifunctions/popup.functions';
import './header.styles.scss';

const Header = ({currentUser,signOutStart}) =>{
    const handleClick = event =>{
        ShowSignUp();
    }
    return(
        <div className='header'>
            <Link className='logo-container' to="/"> 
                HOME
            </Link>
            <div className='options'>
                <Link className='option' onClick={handleClick}>WORD</Link>
                {currentUser?
                <Link className='option' onClick={signOutStart}>SIGN OUT</Link>
                :
                <Link className='option' onClick={handleClick}>SIGN IN</Link>
                }
            </div> 
            {currentUser?
            null:
            <div className='popup-area'>
                <SignUp/><SignIn/>
            </div>
           
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    signOutStart:()=>dispatch(signOutStart())
});
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);