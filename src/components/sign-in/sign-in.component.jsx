import React,{useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Icon, InlineIcon } from '@iconify/react';
import closeIcon from '@iconify/icons-mdi/close';
import {googleSignInStart,facebookSignInStart,emailSignInStart} from  '../../redux/user/user.actions';
import {HideSignIn} from '../../uifunctions/popup.functions'
const SignIn =({emailSignInStart,googleSignInStart,facebookSignInStart})=>{
    const [userCrendentials,setCrendentials] = useState({email:'',password:''});
    const {email,password} =userCrendentials;
    const handleSubmit = async event =>{
        event.preventDefault();
        
        emailSignInStart(email,password);
        /*
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
        */
        
    }
    const handleChange = event =>{
        const {value,name} = event.target;
        setCrendentials({...userCrendentials,[name]:value});
    }
    const handleClick = event =>{
        HideSignIn();
    }
        return(
            <div id="sign-in" className="sign-in" >
                <div className="inner">
                    <h2>로그인</h2>
                    <div className="auth-button">
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Google 계정으로 로그인</CustomButton>
                        <CustomButton type="button" onClick={facebookSignInStart} isfacebookSignIn> facebook 계정으로 로그인</CustomButton>
                    </div>
                    <form onSubmit={handleSubmit}>
                        
                        
                        <FormInput name="email" type="email" value={email} onChange={handleChange} label='이메일' required/>
                    
                        <FormInput name="password" type="password" value={password} onChange={handleChange} label='비밀번호' required/>
                        <div className="buttons">
                            <CustomButton type="submit">로그인</CustomButton>
                        
                        </div>
                    </form>
                    <button className="btn-close" onClick={handleClick}><Icon icon={closeIcon} width="40" >닫기</Icon></button>
                </div>
            </div>
        )
    }
    

const mapDispatchToProps = dispatch=>({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    facebookSignInStart: ()=>dispatch(facebookSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);