import { createGlobalStyle } from "styled-components";
import {AdamWarren} from "./fonts";

export default createGlobalStyle`
  @font-face {
    font-family: "Adam-Warren";
    font-style: normal;
    font-weight: normal;
    src: local("Adam-Warren"), url(${AdamWarren}) format("truetype");
  }
  `