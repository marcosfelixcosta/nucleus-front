/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { string } from "yup";
import { date } from "yup/lib/locale";
import { format } from "path";




interface Cadequipamento {
  eq_equipamento: string;
  eq_patrimonio: string;
  eq_datafabricacao: string;
  eq_status: number;
 
 

}


const CreateEquipamento: React.FC = () => {
  const history = useHistory();
  const [post, setPost] = React.useState(null);
  const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_erro = () => toast.error("Número de patrimonio já cadastrado, Favor verificar!", { theme: "colored" });

  const [model, setModel] = useState<Cadequipamento>({

    eq_equipamento:'',
    eq_patrimonio:'',
    eq_datafabricacao:'',
    eq_status:0,


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

    const respostaEmail = await api.post('/veripatri', model).then((response) => {
      setPost(response.data);
      notify_erro();
    }).catch(error => {
      const responseapi = api.post('/saveequi', model);
      notify_sucesso();

      setTimeout(function () {
        history.goBack();
        //Executado após 2 segundos
      }, 2000)

    });
/*
    try {
      console.log(model);

      const responseapi = await api.post('/saveequi', model);
      notify_sucesso();
      setTimeout(function() {
        window.location.reload();
        //console.log("Executado após 2 segundos!")
      }, 2000)


    } catch (error) {
      notify_erro();
      console.log(model);

    }
    */

  }


  return (

    <div id="page-create-equipamento">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-equipamento-form">

          <fieldset>
            <legend>Equipamento</legend>

            <div className="input-block">
              <label htmlFor="eq_equipamento">Equipamento</label>
              <input type="text" id="txtequipamento" name="eq_equipamento" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="Digite a descrição do equipamento" />
            </div>

            <div className="input-block">
              <label htmlFor="eq_patrimonio">Patrimônio</label>
              <input type="text" id="txtpatrimonio" name="eq_patrimonio" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="Digite o número do patrimônio" />
            </div>

            <div className="input-block">
              <label htmlFor="eq_datafabricacao">Data de Fabricação</label>
              <input type="date" id="txtpatrimonio" name="eq_datafabricacao" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="dd-mm-yyyy"/>
            </div>

            <div className="input-block">
              <label htmlFor="eq_status">Status</label>
              <select name="eq_status" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Selecione o Status</option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
                <option value="3">Com defeito</option>
                <option value="4">Em manutenção</option>

              </select>
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

export default CreateEquipamento;