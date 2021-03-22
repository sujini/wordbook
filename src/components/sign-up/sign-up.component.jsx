import React,{useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart,signUpStart} from '../../redux/user/user.actions';
import {HideSignUp,ShowSignIn} from '../../uifunctions/popup.functions'
import './sign-up.styles.scss';

const SignUp = ({googleSignInStart,signUpStart})=>{

    const [userCrendentials,setCrendentials] = useState({displayName:'',
        email:'',
        password:'',
        confirmPassword:''});
    const  {displayName,email,password,confirmPassword}=userCrendentials;
    const handleSubmit = async event =>{
        event.preventDefault();
       
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
       
        signUpStart({displayName,email,password});
     
        /*
        try{    
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            
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
        HideSignUp();
    }
    const handleLoginClick = event =>{
        HideSignUp();
        ShowSignIn();
    }            
    return(
        <div id="sign-up" className="sign-up">
            
            <div className="inner">
                <h2 className='title'>회원 가입</h2>
                <span>회원가입하여 자신만의 단어장을 만들고 학습해보세요.</span>
               
                <div className="auth-button">
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Google 계정으로 가입</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isfacebookSignIn> facebook 계정으로 가입</CustomButton>
                </div>
               
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} onChange={handleChange} label='사용자 이름' required/>
                
                    <FormInput name="email" type="email" value={email} onChange={handleChange} label='이메일' required/>
                
                    <FormInput name="password" type="password" value={password} onChange={handleChange} label='비밀번호' required/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} onChange={handleChange} label='비밀번호 확인' required/>
                    
                    <CustomButton type="submit">이메일로 회원 가입</CustomButton>
                    <CustomButton type="button" onClick={handleLoginClick}>회원 이신가요? 로그인 </CustomButton>
                </form>
                <button className="btn-close" onClick={handleClick}>닫기</button>
            </div>
           
        </div>
    )
}
    

const mapDispatchToProps = dispatch =>({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    signUpStart : userCredentials=>dispatch(signUpStart(userCredentials))
});
export default connect(null,mapDispatchToProps)(SignUp);