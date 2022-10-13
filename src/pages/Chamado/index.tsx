/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Cadchamado {
  ch_dataabertura: Date;
  ch_prioridade: number;
  ch_descricao: string;
  ch_tipo: number;
  ch_categoria: string;
  ch_assunto: string;
  ch_status: boolean;


}




const CreateChamado: React.FC = () => {
   const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
   const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
   const notify_erro = () => toast.error("Erro na conexão com API do Nucleus. Favor verificar!", { theme: "colored" });

  const [model, setModel] = useState<Cadchamado>({
   ch_dataabertura: new Date(myDate),
   ch_prioridade: 0,
   ch_descricao: '',
   ch_tipo:0,
   ch_categoria: '',
   ch_assunto: '',
   ch_status: false,
  

  });


  function updateInput(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }
  
  function updateModel(e: ChangeEvent<HTMLTextAreaElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }


  function updateModelSelect(e: ChangeEvent<HTMLSelectElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }



  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log(model);

      const responseapi = await api.post('/savech', model);
      notify_sucesso();
      setTimeout(function() {
        window.location.reload();
        //console.log("Executado após 2 segundos!")
      }, 2000)


    } catch (error) {
      notify_erro();
      console.log(model);
      
    }

  }


  return (

    <div id="page-create-chamado">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-chamado-form">

          <fieldset>
            <legend>Chamado</legend>

            <div className="input-block">
              <label htmlFor="prioridade">Prioridade</label>
              <select name="ch_prioridade" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Defina a Prioridade</option>
                <option value="1">Urgente</option>
                <option value="2">Alta</option>
                <option value="3">Média</option>
                <option value="4">Baixa</option>
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="categoria">Categoria do Chamado</label>
              <select name="ch_categoria" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Escolha a categoria</option>
                <option value="1">Acesso a Aplicação</option>
                <option value="2">Dúvida</option>
                <option value="3">Instalação de Software/Aplicação</option>
                <option value="4">Lentidão em Relatório no Sistema</option>
                <option value="5">Lentidão no Sistema</option>
                <option value="6">Liberação de Acesso</option>
                <option value="7">Mensagem de erro Apresentada</option>
                <option value="8">Sistema Indisponível</option>
                <option value="9">Teste de Ambiente</option>
                <option value="10">Bloquear Usuário</option>
                <option value="11">Resetar Senha</option>

              </select>
            </div>

           
            <div className="input-block">
              <label htmlFor="Tipo">Tipo</label>
              <select name="ch_tipo" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Selecione o tipo</option>
                <option value="1">Pergunta</option>
                <option value="2">Incidente</option>
                <option value="3">Problema</option>
                <option value="4">Tarefa</option>

              </select>
            </div>

            <div className="input-block">
              <label htmlFor="ch_assunto">Assunto</label>
              <input type="text" id="txtssunto" name="ch_assunto" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite assunto do chamado"/>
            </div>

           
            <div className="input-block">
              <label htmlFor="descricao">Descrição <span>Máximo de 300 caracteres</span></label>
              <textarea id="assunto" name="ch_descricao" required maxLength={300}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Descrição do chamado" />
            </div>

            <legend></legend>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
          </button>

        </form>

      </main>
    </div>

  );
}

export default CreateChamado;