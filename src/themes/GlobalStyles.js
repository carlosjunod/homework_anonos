import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.secodary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
    text-decoration: none;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }



  ul {
    list-style: none;
    padding-inline-start: 20px;

    & > li {
      margin-bottom: ${({ theme }) => theme.space.marginBottom}
    }

    & > li * >:not(ul) { 
      margin-bottom: 0px;
    }

    & > li > a {
      font-weight: bolder;
    }

    & > li > ul > li > a {
      font-weight: normal;
    }
  }

`;
