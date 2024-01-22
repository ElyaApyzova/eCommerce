import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Header from "./components/Header/Header";


const Layout = () => {
  return (
   <div>
    <Header />
   </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/" element={<Layout />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
