import React from "react";
import { MdExitToApp, MdComputer, MdBusiness, MdModelTraining,  MdBadge, MdAccountCircle, MdChecklist, MdFactCheck, MdMenuBook} from 'react-icons/md';
import { Container, MenuContainer, MenuItemLink, MenuItemButton } from "./styles";

import { useAuth } from "../../context/AuthContext"; /* alteração */
import { toast, ToastContainer } from "react-toastify";


const Asinde: React.FC = () => {

  const notify_dev = () => toast.info("Função em desenvolvimento!", { theme: "colored" });


  const { signOut } = useAuth(); /* alteração */
  
  return (

    <Container>
    
      
      <MenuContainer>
          <MenuItemLink href="/chamados">
            <MdMenuBook size={30}/>
            Chamados
          </MenuItemLink>

          <MenuItemLink href="/equipamento">
            <MdComputer size={30} />
            Equipamentos
          </MenuItemLink>

          <MenuItemLink href="/fabricante">
            <MdBusiness size={30}/>
            Fabricantes
          </MenuItemLink>

          <MenuItemLink href="/modelo">
          <MdModelTraining size={30}/>
            Modelos
          </MenuItemLink>

          <MenuItemLink href="/departamento">
          <MdBadge size={30}/>
            Departamentos
          </MenuItemLink>
          
          <MenuItemButton onClick={notify_dev}>
          <MdFactCheck size={30}/>
            Relatórios Gerenciais
          </MenuItemButton>

          <MenuItemButton onClick={notify_dev}>
          <MdChecklist  size={30}/>
            Avaliar Atendimento
          </MenuItemButton>

          <MenuItemLink href="/usuario">
          <MdAccountCircle size={30}/>
            Usuários
          </MenuItemLink>
         

          <MenuItemButton onClick={signOut}> {/* alteração */}
          <MdExitToApp size={30}/> 
            Sair
          </MenuItemButton>

      </MenuContainer>
      
      <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
    </Container>

   
  );

 }

 export default Asinde;

