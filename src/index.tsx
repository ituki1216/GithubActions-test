import React from "react";
import ReactDOM from "react-dom/client"; // アプリのえみんコンポーネントを取り込む
import App from "./App";
import "./styles/style.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer
import { BrowserRouter as Router, ROute, Switch } from "react-route-dom"

const rootElement = document.getElement.By.Id("root"); // index.html内の<div id="root">を取得する
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);　// reactDOM.createRootを使い、ルートを作成して、アプリケーションをレンダリングする
  root.render(
    <React.StrictMode> 
      <App /> 
    </React.StrictMode> //開発中に潜在的なエラーを検出する為に使用する
    );
}
