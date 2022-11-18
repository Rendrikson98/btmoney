import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --background: #f0f2f5;
    --shape:#fff
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  html {
    @media(max-width: 1080px){ //quando a tela tiver até esse tamanho
      font-size: 93.75%; //isso aqui é 15px se o font size for 16px
    }

    @media(max-width: 720){ //quando a tela tiver até esse tamanho
      font-size: 87.5%; //isso aqui é 14px se o font size for 16px
    }
  }
  
  body,input, textarea, button { //esses elementos html por padrão não pegam a fonte do arquivo html
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{ //tudo que tiver a tag disabled como true vai ter essa configuração 
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
