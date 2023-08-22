import Layout from './components/Layout';
import Error from './components/Error';
import Home from './pages/Home'
import './style/App.scss';
import'./style/fonts.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import Jewelery from './pages/Jewelry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/men's-clothing",
        element: <MenClothing />,
        errorElement: <Error />
      },
      {
        path: "/women's-clothing",
        element: <WomenClothing />,
        errorElement: <Error />
      },
      {
        path: "/jewelry",
        element: <Jewelery />,
        errorElement: <Error />
      }
    ]
  }
])

function App() {
  return (
    <div className="app">
      <div className="logo-container">
        <span className="blur" id="top-blur"/>
        <p className="logo">NovaMall</p>
        <span className="blur" id="bottom-blur"/>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
