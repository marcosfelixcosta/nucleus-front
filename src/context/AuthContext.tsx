import React,{ createContext, useCallback,useContext,useState} from "react";

import api from '../services/api';

interface AuthState {
 // id: Number;
  token: string;
  nome: object;
}


interface SignInCredentials {
  id: number;
  email: string;
  senha:string;
}


interface AuthContextData {
  nome: object;
  singIn(credential: SignInCredentials): Promise<void>;
  signOut(): void;
}

 
 const AuthContext = createContext<AuthContextData> ({} as AuthContextData);


 type Props = { children: React.ReactNode };

 const AuthProvider: React.FC<Props> = ({children}) => {
  const [data,setData] = useState<AuthState>(()=> {
    const id = localStorage.getItem('@Nucleus:id');
    const token = localStorage.getItem('@Nucleus:token');
    const nome = localStorage.getItem('@Nucleus:nome');
  
    
    if (token && nome) {
     return {token, nome: JSON.parse(nome)};
    }
  
    return {} as AuthState;
  
  }
   );


 const singIn = useCallback(async ({email, senha}: SignInCredentials)=>{
  const response = await api.post('session', {
    email,
    senha,
  });

  const {id,token, nome} = response.data;
  console.log(response.data);

  localStorage.setItem('@Nucleus:id', id);
  localStorage.setItem('@Nucleus:token', token);
  localStorage.setItem('@Nucleus:nome', JSON.stringify(nome));

  setData({token, nome});



 },[]);


 const signOut = useCallback(()=> {
 localStorage.removeItem('@Nucleus:id');
 localStorage.removeItem('@Nucleus:token');
 localStorage.removeItem('@Nucleus:nome'); 

 window.location.href = '/';

 setData({} as AuthState);

 },[]);

  return (
     <AuthContext.Provider value={{nome:data.nome, singIn, signOut}}>
     {children}
     </AuthContext.Provider>
  );

};

function useAuth(): AuthContextData{
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Nenhum contexto encontrado!');
    
  }

  return context;
}

export { AuthProvider, useAuth};

