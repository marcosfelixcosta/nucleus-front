/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { string } from "yup";




interface Cadmodelo {
  md_modelo: string;
  md_categoria: string;
  md_observacao: string;

}


const CreateModelo: React.FC = () => {
  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_erro = () => toast.error("Erro na conexão com API do Nucleus. Favor verificar!", { theme: "colored" });

  const [model, setModel] = useState<Cadmodelo>({

    md_modelo:'',
    md_categoria:'',
    md_observacao: '',

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

      const responseapi = await api.post('/savemod', model);
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

    <div id="page-create-modelo">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-modelo-form">

          <fieldset>
            <legend>Modelo</legend>

            <div className="input-block">
              <label htmlFor="md_modelo">Modelo</label>
              <input type="text" id="txtmodelo" name="md_modelo" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="Digite o modelo" />
            </div>

            <div className="input-block">
              <label htmlFor="md_categoria">Categoria</label>
              <input type="text" id="txtcategoria" name="md_categoria" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput(e)} placeholder="Digite a categoria" />
            </div>

            <div className="input-block">
              <label htmlFor="md_observacao">Observação <span>Máximo de 300 caracteres</span></label>
              <textarea id="txtobservacao" name="md_observacao" required maxLength={300} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Descrição" />
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

export default CreateModelo;