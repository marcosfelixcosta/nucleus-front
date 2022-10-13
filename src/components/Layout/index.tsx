import React from "react";
import { Grid } from "./styles";

import MainHeader from "../MainHeader";
import Asinde from "../Aside";
import Content from "../Content";

type Props = { children: React.ReactNode };
const Layout: React.FC<Props> = ({children}) => {
  return (

    <Grid>
        <MainHeader/>
        <Asinde/>
        <Content> 
          {children}
        </Content>
    </Grid>

  );

 }

 export default Layout;

