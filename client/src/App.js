import Layout from './components/Layout';
import Error from './components/Error';
import Home from './pages/Home'
import './style/App.scss';
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
