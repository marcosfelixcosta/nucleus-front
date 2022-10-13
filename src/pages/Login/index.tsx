import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/validationErros';
import { Container, Content, Background, AnimationContainer,MenuItemButton } from './styles';
import { ToastContainer, toast } from 'react-toastify';


interface SignInFormData {
  id:number;
  email: string;
  senha: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const notify_alerta = () => toast.error("Não encontrei suas informações de login, favor verifique e tente novamente!", { theme: "colored" });
  const notify_dev = () => toast.info("Rotina em desenvolvimento!", { theme: "colored" });

  
  const {nome,singIn} = useAuth();

  console.log('log name:',nome);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {

    try {

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('e-mail é obrigatório').email('Digite um e-mail válido'),
        senha: Yup.string().min(6, 'Minimo 6 digitos'),
      });

      await schema.validate(data, { abortEarly: false });
        
      await singIn({id: data.id, email: data.email, senha: data.senha});
      
   
    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
           
      notify_alerta();

        
    }

  }, [singIn]);


  return (

    <Container>
      <Content >
        <AnimationContainer>
          <img src={logoImg} alt="Nucleus - 1.0" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="senha" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Entrar 
             <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover /></Button>

          <MenuItemButton onClick={notify_dev}> 
           Esquecir minha senha
          </MenuItemButton>

          </Form>
         

         
         

          <Link to="/user">

            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>

  );
}

export default SignIn;


