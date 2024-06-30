import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import "./style/App.scss";
import "./style/fonts.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import { ContextProvider } from "./context/ContextProvider.js";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Kids from "./pages/Kids.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/men's-clothing",
        element: <MenClothing />,
        errorElement: <Error />,
      },
      {
        path: "/women's-clothing",
        element: <WomenClothing />,
        errorElement: <Error />,
      },
      {
        path: "women's-clothing/:id",
        element: <Item />,
        errorElement: <Error />,
      },
      {
        path: "/kids",
        element: <Kids />,
        errorElement: <Error />,
      },
      {
        path: "men's-clothing/:id",
        element: <Item />,
        errorElement: <Error />,
      },
      {
        path: "kids/:id",
        element: <Item />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <span className="blur" id="top-blur" />
        <p className="logo">NovaMall</p>
        <span className="blur" id="bottom-blur" />
      </div>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}

export default App;
