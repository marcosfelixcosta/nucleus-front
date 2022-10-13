import styled, {keyframes} from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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
    background: ${props => props.theme.colors.terty};
    color: ${props => props.theme.colors.white};
    border-radius: 15px;
    margin: 10px 0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate} .5s;

    border: .5px solid #ffff;
    box-shadow: 0 1px 8px 5px rgba(0, 0, 0, 0.3);

    transition: transform 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    > header img {
        width: 35px;
        margin-left: 7px;
    }

    > header p{ 
        font-size: 18px;

    }

    > footer span {
        font-size: 12px;
    }
`;