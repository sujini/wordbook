import React,{useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({signUpStart})=>{

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
            
    return(
        <div className="sign-up">
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={displayName} onChange={handleChange} label='displayName' required/>
            
                <FormInput name="email" type="email" value={email} onChange={handleChange} label='email' required/>
            
                <FormInput name="password" type="password" value={password} onChange={handleChange} label='passowrd' required/>
                <FormInput name="confirmPassword" type="password" value={confirmPassword} onChange={handleChange} label='confirmPassword' required/>
                
                <CustomButton type="submit">Sign Up</CustomButton>

            </form>
        </div>
    )
}
    

const mapDispatchToProps = dispatch =>({
    signUpStart : userCredentials=>dispatch(signUpStart(userCredentials))
});
export default connect(null,mapDispatchToProps)(SignUp);