/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState, useEffect } from "react";
import api from '../../services/api';
import Asinde from "../../components/Siderbar";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/esm/Table";
import urgente from '../../assets/Urgente.svg';
import alta from '../../assets/Alta.svg';
import media from '../../assets/Media.svg';
import baixa from '../../assets/Baixa.svg';
import { Check2Square, ZoomOut } from "react-bootstrap-icons";
import moment from 'moment';
import { Badge, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { isJSDocFunctionType } from "typescript";
import { number } from "yup";


interface Iupdate {
  ch_status:boolean;
  ch_resolver: string;

}


interface Ichamado {
  ch_codigo: number;
  ch_dataabertura: Date;
  ch_prioridade: string;
  ch_descricao: string;
  ch_categoria: string;
  ch_assunto: string;
  ch_tipo: number;
  ch_status: boolean;

}

const CreateModelo: React.FC = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0);
  //*************************************** */

  const notify_sucesso = () => toast.success("Chamado finalizado com sucesso!", { theme: "colored" });
  const notify_info = () => toast.info("Função em desenvolvimento!", { theme: "colored" });

  const [chamado, setChamado] = useState<Ichamado[]>([]);

  const [modelUp, setModel] = useState<Iupdate>({
   ch_status:true,
   ch_resolver:'',
    
   });



  useEffect(() => {
    carregarChamados();

  }, []);


  function carregaForm(id: number) {
    const idf = id;
    handleShow();
    console.log(idf);
    setCount(idf);

  }

  async function finalizaCh() {
   
    const updateuser = await api.put(`/finaliza/${count}`,modelUp);
    console.log('valor do idf...', count);
    console.log(modelUp);
    notify_sucesso();
    carregarChamados();
    setTimeout(function () {
      handleClose();
    }, 100)
  }


  function formatDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");

  }

  function updateModel(e: ChangeEvent<HTMLTextAreaElement>) {
    setModel({
      ...modelUp, [e.target.name]: e.target.value
    });
  }


  function verificaPrioridade(prioridade: string) {
    switch (prioridade) {
      case '1':
        return <img src={urgente} height="40px" width="40px" className='img-fluid rounded' alt='' />

        break;
      case '2':
        return <img src={alta} height="40px" width="40px" className='img-fluid rounded' alt='' />

        break;
      case '3':

        return <img src={media} height="40px" width="40px" className='img-fluid rounded' alt='' />

        break;
      case '4':
        return <img src={baixa} height="40px" width="40px" className='img-fluid rounded' alt='' />

        break;
      default:
        return '';
    }


  }


  async function carregarChamados() {

    const chamados = await api.get('/chamados');
    setChamado(chamados.data);

  }


  return (

    <div id="page-create-chamadoedit">
      <Asinde />
      <main>
        <form className="create-chamadoedit-form">

          <fieldset>
            <legend>Chamados abertos</legend>


            {/* tabela */}

            <Table striped bordered hover variant="dark" className="text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Abertura</th>
                  <th>Problema</th>
                  <th>Prioridade</th>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th>Funções</th>
                </tr>
              </thead>
              <tbody>
                {
                  chamado.map(cham => (
                    <tr key={cham.ch_codigo}>
                      <td>{cham.ch_codigo}</td>
                      <td>{formatDate(cham.ch_dataabertura)}</td>
                      <td>{cham.ch_assunto}</td>
                      <td>{verificaPrioridade(cham.ch_prioridade)}</td>
                      <td>{cham.ch_descricao}</td>
                      <td>
                        <Badge pill bg={cham.ch_status ? "success" : "warning"}>
                          {cham.ch_status ? "Finalizado" : "Pendente"}
                        </Badge>

                      </td>
                      <td width="18%">
                        <Button size="sm" variant="success" disabled={cham.ch_status} onClick={() => { carregaForm(cham.ch_codigo) }}> <Check2Square /> Finalizar</Button> {' '}
                        <Button size="sm" variant="info" onClick={notify_info}> <ZoomOut />Visualizar</Button>

                      </td>
                    </tr>

                  ))

                }

              </tbody>
            </Table>


            {/* tabela */}
          </fieldset>


          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />


          {/** Form Modal fechamento do chamado*/}

          <>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Finalizar Chamado</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                  <Form.Control as="textarea" rows={3} name="ch_resolver" required  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateModel(e)} placeholder="Como o problema foi resolvido?" />
    
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={finalizaCh}>
                  Confirmar
                </Button>
              </Modal.Footer>
            </Modal>
          </>

          {/**Fim form modal */}

        </form>

      </main>
    </div>


  );
}

export default CreateModelo;