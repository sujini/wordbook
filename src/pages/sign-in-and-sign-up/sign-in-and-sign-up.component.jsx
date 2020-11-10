import React, { useState ,useEffect} from 'react';
import {connect} from 'react-redux';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = ({error}) =>{
    useEffect (()=>{
        console.log(error&& error.hasOwnProperty('code'))
    },[error]);
    return(
    <div className="sign-in-and-sign-up">
        <span className='error'>{error&& error.hasOwnProperty('code')?error.message:` `}</span>
        <div className='inner'>

                
        <SignIn/>
        <SignUp/>
        </div>
    </div>
    )
    

}
const mapStateToProps = ({user})=>({
    error:user.error
})
export default connect(mapStateToProps)(SignInAndSignUp);