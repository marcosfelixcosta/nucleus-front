import React from "react";
import { Container, SideLeft, LegendContainer, Legend, SideRight } from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const data01 = [
  { name: 'Group A', value: 510, color: "#f15a4b" },
  { name: 'Group B', value: 90, color: "#F7931B"},

];

const PieChartBox: React.FC = () => (


  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#F7931B">
          <div>15%</div>
          <span>Concluído</span>
        </Legend>
        <Legend color="#f15a4b">
          <div>85%</div>
          <span>Pendente</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            cx="40%"
            cy="50%"
            labelLine={true}
            outerRadius={100}
            dataKey="value"
          >
            {
              data01.map((indicator) => (
                  <Cell key={indicator.name} fill={indicator.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>

  </Container>

);

export default PieChartBox;