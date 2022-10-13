/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { string } from "yup";




interface Cadfabricante {
  fb_fabricante: string;
  fb_telefone: string;
  fb_email: string;
  fb_logradouro: string;
  fb_bairro: string;
  fb_cidade: string;
  fb_estado: string;
  fb_contato: string;
  fb_observacao: string;

}


const CreateFabricante: React.FC = () => {
  const history = useHistory();
  const [post, setPost] = React.useState(null);
   const myDate = new Date(Date.now()).toLocaleString().split(',')[0];
   const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
   const notify_exception = () => toast.error("E-mail já cadastrado na base de dados, Favor verificar!", { theme: "colored" });

  const [model, setModel] = useState<Cadfabricante>({
  
    fb_fabricante:'',
    fb_telefone:'',
    fb_email:'',
    fb_logradouro:'',
    fb_bairro:'',
    fb_cidade:'',
    fb_estado:'',
    fb_contato:'',
    fb_observacao:'',

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


    const respostaEmail = await api.post('/verifabri', model).then((response) => {
      setPost(response.data);
      notify_exception();
    }).catch(error => {
      const responseapi = api.post('/savefab', model);
      notify_sucesso();

      setTimeout(function () {
        history.goBack();
        //Executado após 2 segundos
      }, 2000)

    });

    /*
    try {
      //console.log(model);

      const responseapi = await api.post('/savefab', model);
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

    <div id="page-create-fabricante">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-fabricante-form">

          <fieldset>
            <legend>Fabricante</legend>

            <div className="input-block">
              <label htmlFor="fb_fabricante">Fabricante</label>
              <input type="text" id="txtfabricante" name="fb_fabricante" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite o nome do fabricante" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_logradouro">Rua</label>
              <input type="text" id="txtlogradouo" name="fb_logradouro" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite a rua" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_bairro">Bairro</label>
              <input type="text" id="txtbairro" name="fb_bairro" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite o bairro" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_cidade">Cidade</label>
              <input type="text" id="txtcidade" name="fb_cidade" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite a cidade" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_estado">Estado</label>
              <select name="fb_estado" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled selected>Escolha o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceara</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>

              </select>

            </div>

            <div className="input-block">
              <label htmlFor="fb_telefone">Telefone</label>
              <input type="text" id="txttelefone" name="fb_telefone" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite o número" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_email">E-mail</label>
              <input type="text" id="txtemail" name="fb_email" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Digite o e-mail" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_contato">Contato</label>
              <input type="text" id="txtcontato" name="fb_contato" required
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput (e)} placeholder="Informe um nome de contato" />
            </div>

            <div className="input-block">
              <label htmlFor="fb_observacao">Observação <span>Máximo de 300 caracteres</span></label>
              <textarea id="txtobservacao" name="fb_observacao" required maxLength={300}  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Descrição" />
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

export default CreateFabricante;