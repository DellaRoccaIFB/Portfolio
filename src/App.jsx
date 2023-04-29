import React from "react";
import Header from "./Components/Header"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  body{
    max-width: 1920px;
    margin: auto;
    background-color: #171321;
  }
  * {
    -webkit-box-sizing:border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;  
  }
`;

export default function App(){
  return(
    <>
    <GlobalStyle/>
      <Header/>
    </>
  )
}