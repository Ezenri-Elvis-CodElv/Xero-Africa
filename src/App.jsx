import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import Landingpagee from "./pages/Landingpagee";
import AboutUss from "./pages/AboutUss";
import ContactUss from "./pages/ContactUss";
import FAQss from "./pages/FAQss";
import Productss from "./pages/Productss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      { index: true, element: <Landingpagee /> },
      { path: "/about-us", element: <AboutUss /> },
      { path: "/contact-us", element: <ContactUss /> },
      { path: "/products", element: <Productss /> },
      { path: "/faqs", element: <FAQss /> },
         ],
  },
]);
  const App = () => {
  return <RouterProvider router={router} />;
};

export default App;