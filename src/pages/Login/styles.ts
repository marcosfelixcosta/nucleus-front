import styled, { keyframes } from 'styled-components';
import { shade} from 'polished';
import signInBackground from '../../assets/img-loginimage.png';


export const Container = styled.div`
min-height: 100vh;
display: flex;
align-items: stretch;


`;


export const MenuItemButton = styled.button`

  margin-top:30px;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  border: none;
  background: none;
  align-content:center ;
  transition: opacity .3s;
  
  &:hover {
    opacity:.5;
    
  }

  `;


export const Content = styled.div`
display:flex;
flex-direction: column;
align-items: center;
place-content: center;
width:100%;
max-width: 750px;
background-color: #302935;

img{
  position: relative;
  top: 30px;
}

form {
  margin:80px 0;
  width:340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
    color:white;

  }


  a {
    color: #ff9000;
    display: block;
    margin-top:24px;
    text-decoration: none;
    transition: color 0.2s;

 &:hover{
  color: ${shade(0.2,'#ff9000')};

 }

  }
}

> a {
    color: #ff9000;
    display: block;
    margin-top:20px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items:center;

    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2,'#ff9000')};
    }
}


`;


const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin: -15px 0 17px 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
flex: 1;
background: url(${signInBackground}) no-repeat left;
background-size: cover;
background-position: bottom;
min-height: 100vh;

`;