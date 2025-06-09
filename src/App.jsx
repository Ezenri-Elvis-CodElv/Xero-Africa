import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import Landingpage from "./pages/Landingpage";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Productss from "./pages/Productss";
import Faqs from "./pages/faqs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      { index: true, element: <Landingpage /> },
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