import { createBrowserRouter } from "react-router-dom";

import Wrapper from "layouts/Wrapper";
import Home from "pages/Home";
import Movies from "pages/Movies";
import NotFound from "pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      }
    ],
    errorElement: <NotFound />
  }
], {basename: process.env.PUBLIC_URL});

export default router;