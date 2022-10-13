import React, { useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import Card from "../../components/Card";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import api from '../../services/api';
import happyImg from "../../assets/Group.svg";
import {Container, Content } from './styles';


const Dasboard: React.FC = () => {

  
  const [Alta,  setAlta ] = useState(0);
  const [Media, setMedia] = useState(0);
  const [Baixa, setBaixa] = useState(0);

  async function contaChamados() {
  

    const alta = await api.get('/count/1');
    setAlta(alta.data);

    const media = await api.get('/count/3');
    setMedia(media.data);

    const baixa = await api.get('/count/4');
    setBaixa(baixa.data);
    
   
  }

  contaChamados();
  
     
  return (
    <Container>
     <ContentHeader   title="Dashboard" lineColor="#F7931B">
        
     </ContentHeader>
     <Content>
        <Card
        title="Prioridade Baixa"
        color="#689d69"
        amount={Number(Baixa)}
        footerLabel="Fique atento na prioridade do chamado!"
        link="/user"
        />


        <Card
        title="Prioridade Média"
        color="#F7931B"
        amount={Number(Media)}
        footerLabel="Fique atento na prioridade do chamado!"
        link="/usuario"
        />

        <Card
        title="Prioridade Alta"
        color="#f15a4b"
        amount={Number(Alta)}
        footerLabel="Fique atento na prioridade do chamado!"
        link="/usuario"
        />

        <MessageBox
          title="Muito bem!"
          description="Seus chamados estão em dia!"
          footerText="Fique atento na prioridade do chamado!"
          icon={happyImg}
        />

        <PieChartBox />

        <HistoryBox
          /* data={} */
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#f15a4b"
        />
        
     </Content>
    </Container>
  );

 }

 export default Dasboard;

