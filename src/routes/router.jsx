import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
const Index = lazy(() => import("../pages/index.jsx"));
const RandomGallery = lazy(() => import("../pages/randomGalery/index.jsx"));
const FilterGallery = lazy(() => import("../pages/filterGalery/index.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Index />
      </Suspense>
    ),
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RandomGallery />
          </Suspense>
        ),
        errorElement: <div>Oops! Something went wrong.</div>,
      },
      {
        path: "filter",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FilterGallery />
          </Suspense>
        ),
        errorElement: <div>Oops! Something went wrong.</div>,
      },
    ],
  },
]);

export default router;
