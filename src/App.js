import { Header } from "antd/es/layout/layout";
import React from "react";
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom"; 


function App() {
    return (
        <Router>
            <div className="container">
              <Header/>  
            </div>
        </Router>
    )
}

export default App;