import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
:root{
        --OffWhite: hsl(36, 100%, 99%);
        --GrayishBlue: hsl(233, 8%, 79%);
        --DarkGrayishBlue: hsl(236, 13%, 42%);
        --VeryDarkBlue: hsl(240, 100%, 5%);
        --SoftOrange: hsl(35, 77%, 62%);
        --SoftRed: hsl(5, 85%, 63%);
}
       
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
        /* margin:0 auto; */
        
    }
    body{
        background-color: var(--OffWhite);
    }
    a{
        text-decoration: none;
    }
   
 `;
export default GlobalStyle;
