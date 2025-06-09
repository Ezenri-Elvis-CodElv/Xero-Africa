import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import Landingpage from "./pages/Landingpage";
import FAQs from "./pages/FAQs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/products", element: <Products /> },
      { path: "/faqs", element: <FAQs /> },
         ],
  },
]);
  const App = () => {
  return <RouterProvider router={router} />;
};

export default App;