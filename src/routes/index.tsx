import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter } from "react-router-dom";

import Wrapper from "layouts/Wrapper";
import Home from "pages/Home";
import Series from "pages/Series";
import NotFound from "pages/NotFound";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <QueryClientProvider client={client}>
        <Wrapper />
      </QueryClientProvider>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/movies/:movieId",
            element: <></>
          }
        ]
      },
      {
        path: "/series",
        element: <Series />,
      }
    ],
    errorElement: <NotFound />
  }
], {basename: process.env.PUBLIC_URL});

export default router;