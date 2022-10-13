import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom'


import { Container } from './style';

export default function Sidebar(){

 
  return (
   <Container>
    <div>
    <aside className="app-sidebar">
    
    
    <footer>
     <Link to="/">
       <button type="button" name='button'>
       <MdHome size={45} color="#FFF" />
            
      </button>
      </Link>
     
       
    </footer>
  </aside>
 
  </div>
  </Container>
 
  );
}