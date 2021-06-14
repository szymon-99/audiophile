import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
--black:#000000;
--dark:#101010;
--white:#FFFFFF;
--strong-white:#FAFAFA;
--grey:#F1F1F1;
--peach:#D87D4A;
--light-peach:#FBAF85;
--red:#CD2C2C;
--regular:400;
--medium:500;
--bold:700;
--transition: all .4s ease;
}
*,
::after,
::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: 'Manrope', sans-serif;
  color:var(--black);
  font-size:0.9375rem;
  line-height: 25px;
  font-weight: var(---f-medium);
}
ul{
  list-style:none;
}
a{
  text-decoration:none;
}

/* ==========
   TYPOGRAPHY
============= */

h1,h2,h3,h4,h5,h6{
  font-weight: var(--bold);
  text-transform: uppercase;
}

h1{
  font-size:2.25rem;
  line-height: 2.5rem;
  letter-spacing: 0.08rem;
  
}
h2{
font-size: 1.75rem;
line-height: 2.375rem;
letter-spacing: 0.0625rem;
}
h3{
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: 0.05rem;
}
h4{
    font-size:1.75rem;
    line-height: 2.375rem;
    letter-spacing: 0.125rem;
  }


@media screen and (min-width:992px){
  h1{
    font-size:3.5rem;
    line-height: 3.625rem;
    letter-spacing:0.125rem;
  }
  h2{
    font-size:2.5rem;
    line-height: 2.7rem;
    letter-spacing: 0.09rem;
  }
  h3{
    font-size: 2rem;
    letter-spacing: 0.07rem;
  }
}
.subtitle{
font-weight: var(---regular);
line-height: 1.2rem;
letter-spacing: 0.625rem;
font-size: 0.875rem;
color:var(--peach);
}
`
