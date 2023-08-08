import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-Primary:#ffa31a;
    --color-Second:#808080;
    --color-gray-1:	#292929;
    --color-gray-2:#1b1b1b;
    --color-blue-900: #0d47a1;
    --color-blue-800: #1565c0;
    --color-blue-700: #1976d2;
    --color-blue-600: #1e88e5;
    --color-blue-500: #2196f3;
    --color-blue-400: #42a5f5;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #bbdefb;
    --color-gray-950: #121214;
    --color-gray-900: #212121;
    --color-gray-850: #212529;
    --color-gray-800: #424242;
    --color-gray-750: #343b41;
    --color-gray-700: #616161;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-200: #eeeeee;
    --color-gray-100: #f5f5f5;
    --color-main: #27ae60;
    --color-main-2:#219653;
    --color-main-3: #168821;
    --color-white: #ffffff;
    --color-white-2: #f8f9fa;
    --color-grey-1:#f5f5f5;
    --color-grey-2: #e0e0e0;
    --color-grey-3:#828282;
    --color-grey-4: #999999;
    --color-grey-btn: #bdbdbd;
    --color-grey-dark: #333333;
    --color-back-modal: rgba(0, 0, 0, 0.5);
    --color-back: #111111;

    font-size: 60%;   
  }
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-back);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
    main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container{
    height: 100vh;
    max-width: 1200px;
    display: flex;
    margin:0 auto;
  }

  body, input, button, textarea ,label{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

`;
