/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { string } from "yup";
import { date } from "yup/lib/locale";
import { format } from "path";




interface Caddepartamento {
  dp_departamento: string;
  dp_observacao: string;

}


const CreateDepartamento: React.FC = () => {
  const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_erro = () => toast.error("Erro na conexão com API do Nucleus. Favor verificar!", { theme: "colored" });

  const [model, setModel] = useState<Caddepartamento>({

    dp_departamento:'',
    dp_observacao:'',
  
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

      const responseapi = await api.post('/savedep', model);
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

    <div id="page-create-departamento">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-departamento-form">

          <fieldset>
            <legend>Departamento</legend>

            <div className="input-block">
              <label htmlFor="dp_departamento">Departamento</label>
              <input type="text" id="txtdepartamento" name="dp_departamento" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="Digite a descrição do departamento" />
            </div>

            <div className="input-block">
              <label htmlFor="dp_observacao">Observação <span>Máximo de 300 caracteres</span></label>
              <textarea id="txtobservacao" name="dp_observacao" required maxLength={300}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Observação" />
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

export default CreateDepartamento;