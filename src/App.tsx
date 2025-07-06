import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import SpinnerPage from "@/components/shared/SpinnerPage";
import { Routes } from "@/pages/Routes";
import "nprogress/nprogress.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE !== "production" && <ReactQueryDevtools initialIsOpen={false} />}
        <Suspense fallback={<SpinnerPage />}>
          <Routes />
        </Suspense>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
