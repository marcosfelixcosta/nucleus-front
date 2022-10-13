/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useEffect, useState } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import { useHistory,useParams } from "react-router-dom";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface CadUser {
   nome: string;
  logradouro: string;
  estado: string;
  bairro: string;
  cidade: string;
  email: string;
  senha: string;
  telefone: string;
  acesso: number;
  status: number;

}

const CreateUser: React.FC = () => {
  const idb = useParams();
  const history = useHistory();
  const id = localStorage.getItem('@Nucleus:id');
  const [post, setPost] = useState(null);
  const notify_sucesso = () => toast.success("Cadastro realizado com sucesso!", { theme: "colored" });
  const notify_update = () => toast.info("Atualização executada com sucesso!", { theme: "colored" });
  const notify_exception = () => toast.error("Usuário já cadastrado na base de dados, favor verique os dados!", { theme: "colored" });

  const [model, setModel] = useState<CadUser>({
    nome: '',
    logradouro: '',
    estado: '',
    bairro: '',
    cidade: '',
    email: '',
    senha: '',
    telefone: '',
    acesso: 1,
    status: 1

  });

  useEffect(()=>{
    console.log(idb);
    editUser(`${id}`);
  
    },[idb])
 
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }


  function updateModelSelect(e: ChangeEvent<HTMLSelectElement>) {
    setModel({
      ...model, [e.target.name]: e.target.value
    });
  }

  async function editUser(idb: string){
  const response = await api.get(`/user/${id}`)
  
  setModel({
  nome: response.data.nome,
  logradouro: response.data.logradouro,
  estado: response.data.estado,
  bairro: response.data.bairro,
  cidade: response.data.cidade,
  email: response.data.email,
  senha: response.data.senha,
  telefone: response.data.telefone,
  acesso: 1,
  status: 1,

  });

  }

  /*
    try {
  
        const responseapi = await api.post('/save', model);
        notify_sucesso();
  
        setTimeout(function () {
          history.goBack();
          //console.log("Executado após 2 segundos!")
        }, 2000)
  
  
      } catch (error) {
        notify_erro();
        console.log(model);
  
  
      }
     
  */

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();


 if (JSON.stringify(idb) !== '{}') {
  const updateuser = await api.put(`/update/${id}`,model);
  notify_update();

  setTimeout(function () {
    history.goBack();
    //Executado após 2 segundos
  }, 2000)

 } else {


    const respostaEmail = await api.post('/verifica', model).then((response) => {
      setPost(response.data);
      notify_exception();
    }).catch(error => {
      const responseapi = api.post('/save', model);
      notify_sucesso();

      setTimeout(function () {
        history.goBack();
        //Executado após 2 segundos
      }, 2000)

    });
  }

  }

  return (

    <div id="page-create-usuario">
      <Asinde />
      <main>
        <form onSubmit={onSubmit} className="create-usuario-form">

          <fieldset>
            <legend>Criar conta</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input type="text" id="txnome" name="nome" required
              value={model.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Digite seu nome" />

            </div>

            <div className="input-block">
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" id="txtlogradouro" name="logradouro" required
              value={model.logradouro}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Endereço" />
            </div>

            <div className="input-block">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="txtbairro" name="bairro" required
              value={model.bairro}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Bairro" />
            </div>

            <div className="input-block">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="txtcidade" name="cidade" required
              value={model.cidade}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Cidade" />
            </div>

            <div className="input-block">
              <label htmlFor="estado">Estado</label>
              <select name="estado" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateModelSelect(e)} defaultValue={'DEFAULT'}>
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
              <label htmlFor="telefone">Telefone</label>
              <input type="text" id="txttelefone" name="telefone" required
              value={model.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Telefone" />
            </div>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="txtemail" name="email" required
              value={model.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="E-mail" />
            </div>

            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input type="password" id="txtsenha" name="senha" required
              value={model.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} placeholder="Senha" autoComplete="on" />
            </div>

            <legend></legend>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
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
          </button>

        </form>

      </main>
    </div>

  );
}

export default CreateUser;