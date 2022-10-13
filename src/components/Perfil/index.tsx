/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import  { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOusideClick";
import imgPerfil from '../../assets/icon-seta.svg';
import imgphoto from '../../assets/perfil.png';
import React from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { BsPencilSquare } from "react-icons/bs";
import { ImExit } from "react-icons/im";


export default function Perfil() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const nome = localStorage.getItem('@Nucleus:nome');
  const codigo = localStorage.getItem('@Nucleus:id');
  const Nsemaspas = nome?.replace(/"/g,'');
  const id =Number(codigo);

  const { signOut } = useAuth();

  const history = useHistory();
  
  

  function updateUser(id:number){
    history.push(`/usuario/${id}`);

  }

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img src={imgphoto} width="40px" height="40px" alt ="User Pho"/>
          <span>{Nsemaspas}</span>
          <img className="arrow"
           src={imgPerfil}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <button onClick={() => updateUser(id)}>Editar perfil < BsPencilSquare /></button>
              {/*<a href="/usuario">Editar perfil< BsPencilSquare /></a>*/}
            </li>
            <li>
              {/* <a href="/">Sair</a> */}
              <button onClick={signOut}>Sair< ImExit /></button>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
