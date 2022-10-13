import styled from "styled-components";

interface IContainerProps {
    color: string;

}


export const Container = styled.div<IContainerProps>`

    position: relative;
    width: 32%;
    height: 150px;
    margin: 10px 0 80px 0;
    color: ${props => props.theme.colors.white};
    background: ${props => props.color};
    border-radius: 15px;
    padding: 10px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: .5px solid #ffff;
    box-shadow: 0 1px 8px 5px rgba(0, 0, 0, 0.3);
    transition: transform 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    > h1 {
        font-size: 48px;
        font-weight: 700;

    }

    > small {
        font-size: 12px;
       /*  padding-bottom: 4%;
        border-bottom: 1.5px solid #ffff; */
    }

`;

export const ContainerTitle = styled.div`
    width: 105%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg path {
        /* color: #fff; */
        fill: #ffff;
        transition: .4s;

    }

    svg:hover path {
        fill: #302935;
        /* color: #302935; */
    }

    > span {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 500;
        margin-left: 22px;
        
    }
`;

