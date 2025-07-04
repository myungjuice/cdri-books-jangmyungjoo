import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import BooksPage from "./BooksPage";
import WishlistPage from "./WishlistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
