import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Productss from "./pages/Productss";
import Faqs from "./pages/faqs";
import Landingpagee from "./pages/Landingpagee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      { index: true, element: <Landingpagee /> },
      { path: "/about-us", element: <Aboutus /> },
      { path: "/contact-us", element: <Contactus /> },
      { path: "/products", element: <Productss /> },
      { path: "/faqs", element: <Faqs /> },
         ],
  },
]);
  const App = () => {
  return <RouterProvider router={router} />;
};

export default App;