import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import './style.css'



ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <App value={'aaaa'} />
    </BrowserRouter>

)