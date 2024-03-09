import  Header  from "./components/Header/index";
import React from "react";
import { BrowserRouter, Routes,Link,Route,Switch,  } from "react-router-dom"; 
import Products from './components/Product/Products';



function App() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
       <Route path="products" element={<Products />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;