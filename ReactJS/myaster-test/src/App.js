import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SideContent from './Pages/SideContent/Index'
import MainContent from './Pages/MainContent/MainContent';

function App() {

  const Layout = () => {
    return (
      <div className='layout'>
        <SideContent />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
    },
  ]);

  return (<RouterProvider router={router} />);
}

export default App;
