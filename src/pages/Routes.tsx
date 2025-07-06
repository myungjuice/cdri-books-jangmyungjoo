import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import RootLayout from "@/components/layouts/RootLayout";

import BooksPage from "./BooksPage";
import WishlistPage from "./WishlistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <BooksPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
