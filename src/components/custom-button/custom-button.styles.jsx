import styled,{css} from 'styled-components';
const buttonStyles = css`
    background-color:black;
    color:white;
    border:none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;
const googleSignInStyles = css`

    background-color: #4285f4;
    color: white;
    width:49%;
    margin-right:2%;
    float:left;
  
    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;
const facebookSignInStyles = css`

    background-color: #3b5998;
    color: white;
    width:49%;
    float:left;
    &:hover {
      background-color: #365088;
      border: none;
    }
`;

const emailSignInStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-top:10px;

    span {
        height:35px;
    }
    &:hover{
        span {
            border-bottom:1px solid #333;
        }
    }
`;
const studyStyles = css`
    width:auto;
    background-color: #357ae8;
    color: white;

    &:hover{
        background-color: #4285f4;
    }
`;
const getButtonStyles = props =>{
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }else if(props.isfacebookSignIn){
        return facebookSignInStyles;
    }else if(props.isMember){
        return emailSignInStyles;
    }else if(props.isbtnStudy){
        return studyStyles;
    }
    return props.inverted?invertedButtonStyles:buttonStyles;
}
export const CustomButtonContainer = styled.button`
min-width: 165px;
width: 100%;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}


`;