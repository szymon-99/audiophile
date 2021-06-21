import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
--black:#000000;
--dark:#101010;
--white:#FFFFFF;
--strong-white:#FAFAFA;
--gray:#F1F1F1;
--dark-gray:#4C4C4C;
--peach:#D87D4A;
--light-peach:#FBAF85;
--red:#CD2C2C;
--regular:400;
--medium:500;
--bold:700;
--transition: all .3s ease-in-out;
--radius:8px;
--max-width:1100px;
--tablet:768px;
--nav-height:6.125rem;
--shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

h6{
font-size:0.9375rem;
line-height: 1.25rem;
letter-spacing: 0.066rem;
}

@media screen and (min-width:768px){
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
  h6{
    font-size:1.125rem;
    line-height: 1.5rem;
    letter-spacing: 0.081rem;
  }
}
.subtitle{
font-weight: var(---regular);
line-height: 1.2rem;
letter-spacing: 0.625rem;
font-size: 0.875rem;
color:var(--peach);
text-transform: uppercase;
}
.section{
  width:90vw;
  max-width:var(--max-width);
  margin:0 auto 7.5rem;
}

  @media screen and (min-width:768px){
   .tablet-section{
    width:90vw;
    max-width:var(--max-width);
    margin:0 auto;
  }

  @media screen and (min-width:992px){
    margin:0 auto 10rem;
  }
}

.menu{
  a {
  font-size: 0.8125rem;
  line-height: 1.5625rem;
  letter-spacing: 0.125rem;
  font-weight: var(--medium);
  color: var(--white);
  text-transform: uppercase;
  transition: var(--transition);
  }
  a:hover {
   color: var(--peach);
  }
}

.btn{
  display: inline-block;
  font-size: 0.8125rem;
  text-transform: uppercase;
  border:none;
  cursor: pointer;
  padding: 1rem 2rem;
  color: var(--white);
  background-color: var(--peach);
  letter-spacing: 0.0625rem;
  line-height: 1rem;
  font-weight: var(--bold);
  transition: var(--transition);
  :hover {
    background-color: var(--light-peach);
  }
}
.btn.secondary{
  color: var(--black);
  background-color: transparent;
  -webkit-box-shadow: inset 0px 0px 0px 1px var(--black);
  -moz-box-shadow: inset 0px 0px 0px 1px var(--black);
  box-shadow: inset 0px 0px 0px 1px var(--black);
  :hover {
    background-color: var(--black);
    color: var(--white);
  }
}
.btn.secondary.gray{
  background-color: var(--black);
  color: var(--white);
  :hover {
    background-color: var(--dark-gray);
    box-shadow: none;
  }
}
/* ==========
 CSS TRANSITION GROUP
============= */

.cart-enter{
  opacity:0;
}
.cart-enter-active {
  transition: var(--transition);
  opacity:1;
}
.cart-exit {
  opacity:1;
}
.cart-exit-active{
  opacity:0;
  transition: var(--transition);
}
`
