import styled,{css} from 'styled-components';

export const CardController = styled.div`
text-align:right;

`;
const cursorStyle = props => props.isMove?css`cursor:move;`:css`cursor:pointer;`;
export const IconBtn = styled.button`
background:none;
border:0;
font-size:20px;
padding: 5px;
margin: 5px 5px 0 0;
line-height:0;
outline:none;
&:hover {
    color: #357ae8;
    
}
${cursorStyle}

`;