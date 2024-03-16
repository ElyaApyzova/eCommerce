import React from "react";
import "./App.css";
import "./css/style.css";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import Cart from "./pages/CartPage/Cart";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./common/Header";



function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
                
            </Router>
        </div>
    )
}
   
export default App;