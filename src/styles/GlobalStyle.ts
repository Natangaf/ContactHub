import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-Primary:#ffa31a;
    --color-Second:#808080;
    --color-gray-1:	#292929;
    --color-gray-2:#1b1b1b;
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
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin:0 auto;
  }

  body, input, button, textarea ,label{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

`;
