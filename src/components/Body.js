import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetailsPage from "./MovieDetailsPage";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
    {
      path: "/details/:id",
      element: <MovieDetailsPage/>,
    }
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
