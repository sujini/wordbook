import React, { useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { createWordStart } from '../../redux/word/word.actions';


const CreateWord =({createWordStart})=> {
  const [wordContent,setwordContent] = useState({content:'',meaning:''});
  const {content,meaning} =wordContent;

  const handleChange = (event) => {
    const {name,value} = event.target;
    setwordContent({...wordContent,[name]:value});
    
  }
  const handleSubmit = async event => {
    event.preventDefault();
    createWordStart(content,meaning);
    setwordContent({content:'',meaning:''})
 
  }
 
    
    return (
        <form className="create-word" onSubmit={handleSubmit}>
         
            <div className="create-word-inner">  
              <FormInput name="content" type="text" value={content} onChange={handleChange} label='content' required/>
                     
            
              <FormInput name="meaning" type="text" onChange={handleChange} value={meaning} label="meaning" required/>
      
              <CustomButton type="submit">Add Wordbook</CustomButton>
            </div>
        </form>
    )
  
}




const mapDispatchToProps = dispatch=>({
  createWordStart:(content,meaning)=>dispatch(createWordStart({content,meaning}))
})
export default connect(null, mapDispatchToProps)(CreateWord)
