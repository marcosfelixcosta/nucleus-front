import styled, {keyframes} from "styled-components";


interface ILegendProps {
    color: string;

}

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
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background: ${props => props.theme.colors.terty};
    color: ${props => props.theme.colors.white}; 

    border-radius: 15px;

    display: flex;

    animation: ${animate} .5s;

    border: .5px solid #ffff;
    box-shadow: 0 1px 8px 5px rgba(0, 0, 0, 0.3);
    
    transition: transform 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }
`;

export const LegendContainer = styled.ul`
    
    list-style: none;
    max-height: 175px;
    padding-right: 15px;
      
`;

export const Legend = styled.li<ILegendProps>`
    
    display: flex;

    align-items: center;
    margin-bottom: 7px;
     

    > div {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #fff;
        background: ${props => props.color};
        font-size: 18px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
display:flex;
flex:1;
justify-content:center;



`;
