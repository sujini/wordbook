import React,{useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInwithGoogle, auth} from '../../firebase/firebase.utils';
import {googleSignInStart,emailSignInStart} from  '../../redux/user/user.actions';
const SignIn =({emailSignInStart,googleSignInStart})=>{
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
    
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    
                    <FormInput name="email" type="email" value={email} onChange={handleChange} label='email' required/>
                
                    <FormInput name="password" type="password" value={password} onChange={handleChange} label='passowrd' required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    

const mapDispatchToProps = dispatch=>({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);