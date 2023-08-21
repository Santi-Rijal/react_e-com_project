import Layout from './components/Layout';
import Error from './components/Error';
import Home from './pages/Home'
import './style/App.scss';
import'./style/fonts.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
