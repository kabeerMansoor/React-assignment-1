import React from "react";
import ReactDom from "react-dom/client";
import natureImage from "../public/free-nature-images.jpg";
import ReactIcon from "./assets/react.svg"
import './App.css'

const rootDiv = document.getElementById('root');

ReactDom.createRoot(rootDiv).render(
  <div className="design">
    <h1>Hello World</h1>
    <h2>This is First React Assignment.</h2>
    <p>My name is kabeer M Mansoor</p>
    <img src={natureImage} width={300} height={300} />
    <img src={ReactIcon} width={300} height={300} />
  </div>
);