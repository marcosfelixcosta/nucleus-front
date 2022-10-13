import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerTitle } from "./styles";
import { CgEnter } from 'react-icons/cg';
import { IconContext } from "react-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

interface ICardProps {
    title: string;
    amount: number;
    footerLabel: string;
    color: string;
    link: string;

}

const Card: React.FC<ICardProps> = ({ title, amount, footerLabel, color }) => {
    return (


        <Container color={color}>

            <ContainerTitle>
                <span>{title}</span>
                <Tippy className="container" content={'Acessar Chamados'} placement={"bottom"} >
                <Link to={"/chamadoedit"}>
                    <IconContext.Provider value={{
                        className: "icon-enter",
                        size: "30px",
                    }}>

                        <CgEnter />
                    </IconContext.Provider>
                </Link>
            </Tippy>
            </ContainerTitle>
            <h1>{amount}</h1>
            <small>{footerLabel}</small>
        </Container >


    );

}

export default Card;


