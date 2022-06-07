//@ts-ignore
import styles, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/nattu-adnan-unsplash.jpg';

export const GlobalStyles = createGlobalStyle`
    html{
        height:100%;
    }
    body
    {
        background-image: url(${BGImage});
        background-size: cover;
        margin:0;
        padding:0;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family:'Catamaran',san-serif,monospace;
    }
`;


export const Wrapper = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p{
        color:white;
    }

    .score{
        color:white;
        font-size:2rem;
        margin:0;
    }

    h1{
        font-family:Fascinate Inline;
        background-image:linear-gradient(180deg,#fff,#87f1ff);
        background-size:100%;
        background-clip:text;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        -moz-background-clip:text;
        -moz-text-fill-color:transparent;
        filter:drop-shadow(2px 2px #0085a3);
        font-size:70px;
        font-weight:700px;
        text-align:center;
        margin:20px;
    }
    .start,.next{
        cursor:pointer;
        background:linear-gradient(180deg,#fff,#fcc91);
        border:2px solid #d38558;
        box-shadow:0px 5px 10px rgba(0,0,0,0.25);
        border-radius:10px;
        height:40px;
        margin:20px 0px;
        padding:0px 40px;

    }
    .start{
        max-width: 200px;
    }
`
export const QuestionWrapper = styles.div`
    max-width:1100px;
    background:#ebfeff;
    border-radius:10px;
    border:2px solid #0085a3;
    padding:20px;
    box-shadow:0px 5px 10px rgba(0,0,0,0.25);
    text-align:center;


    p {
      font-size:1rem;        
    }
`;


type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};


export const ButtonWrapper = styles.div`
    transition:all 0.3s ease-in;

    :hover{
        opacity:0.8;
    }

    button {
        cursor:pointer;
        user-select:none;
        font-size:0.8rem;
        width:100%;
        height:40px;
        margin:5px 0;
        background:${({ correct, userClicked }: ButtonWrapperProps) =>
        correct
            ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
            : !correct && userClicked
                ? 'linear-gradient(90deg, #FF5656, #C16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
                
        border:3px solid #fff;
        box-shadow:1px 2px 0px rgba(0,0,0,0.1);
        border-radius:10px white;
        text-shadow:0px 1px 0px rgba(0,0,0,0.5);
        };
`;

