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
        if(!currentUser){
            ShowSignUp();
        }
        
    }
    return(
        <div className='header'>
            <Link className='logo-container' to="/"> 
                HOME
            </Link>
           
            {currentUser?
            <div className='options'>
            
                <Link className='option' to="/word">WORD</Link>
                <Link className='option' onClick={signOutStart}>SIGN OUT</Link>
            </div>
            :
            <div className='options'>
            
                <Link className='option' onClick={handleClick}>SIGN IN</Link>
                <div className='popup-area'>
                    <SignUp/><SignIn/>
                </div>
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