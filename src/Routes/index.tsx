import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

import AppLayout from "@/Layout/AppLayout";

const Loader = () => <div>Loading...</div>;

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: "/",

      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import("@/Pages/Home")));
