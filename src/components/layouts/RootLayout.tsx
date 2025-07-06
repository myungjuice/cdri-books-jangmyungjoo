import NProgress from "nprogress";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";

function ProgressBar() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [location]);

  return null;
}

export default function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ProgressBar />
      <Header />
      <main className="mx-auto w-full max-w-[960px] flex-1 py-20">
        <Outlet />
      </main>
    </div>
  );
}
