import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Yanpeng from "./pages/about/members/Yanpeng.jsx";
import About from "./pages/about/About";


// allows nested UI to show up when child routes are rendered.
const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />  
      <Footer />
    </>
   ); 
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [ 
      {
        path: "/",
        element: <About/>
      },
      {
        path: "/about/yanpeng",
        element: <Yanpeng/>
      },

     
      ]
    },
    // {
    //   path: "/register",
    //   element: <Register/>
    // },
    // {
    //   path: "/login",
    //   element: <Login/>
    // },
  ]);
     

function App() {
  return (
  <div className="app">
    <RouterProvider router={router}></RouterProvider>
  </div>
  
  );
}

export default App;
