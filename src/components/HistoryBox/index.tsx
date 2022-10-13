import React from "react";
import { BarChartLine } from "react-bootstrap-icons";
import { ComposedChart } from "recharts";
import { Bar } from "recharts";
import { Area } from "recharts";
import { Legend } from "recharts";
import { YAxis } from "recharts";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Container } from "./styles";



interface IHistoryBoxProps {
  /* data: {
      month: string;
      amountEntry: number;
      amountOutput: number;
      
  }[], */
  lineColorAmountEntry: string,
  lineColorAmountOutput: string,
}

const data = [
  {
    "name": "Janeiro",
    "Finalizado": 4000,
    "Pendente": 2400,
    "Total": 2400
  },
  {
    "name": "Fevereiro",
    "Finalizado": 3000,
    "Pendente": 1398,
    "Total": 2210
  },
  {
    "name": "Março",
    "Finalizado": 2000,
    "Pendente": 9800,
    "Total": 2290
  },
  {
    "name": "Abril",
    "Finalizado": 2780,
    "Pendente": 3908,
    "Total": 2000
  },
  {
    "name": "Maio",
    "Finalizado": 1890,
    "Pendente": 4800,
    "Total": 2181
  },
  {
    "name": "Junho",
    "Finalizado": 2390,
    "Pendente": 3800,
    "Total": 2500
  },
  {
    "name": "Julho",
    "Finalizado": 3490,
    "Pendente": 4300,
    "Total": 2100
  }
];

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  lineColorAmountEntry, lineColorAmountOutput
}) => (
  <Container>
    <h2>Histórico de Chamados</h2>
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={1024} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="Total" fill="#d8c0c0" stroke="#49458a" />
        <Bar dataKey="Pendente" barSize={20} fill="#17e1da" />
        <Line type="monotone" dataKey="Finalizado" stroke="#F7931B" />
      </ComposedChart>
    </ResponsiveContainer>

  </Container>

);

export default HistoryBox;