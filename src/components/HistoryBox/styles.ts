import styled, {keyframes} from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 340px;

    background: ${props => props.theme.colors.terty};
    color: ${props => props.theme.colors.white};
    margin-top: 80px;
    padding: 30px 20px;
    border-radius: 15px;
    border: .5px solid #ffff;
    box-shadow: 0 1px 8px 5px rgba(0, 0, 0, 0.3); 
    animation:${animate}.5s;
   
    > h2 {
        margin-bottom: 20px;
    }
    

`;