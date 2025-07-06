import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import { Routes } from "@/pages/Routes";

import "nprogress/nprogress.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE !== "production" && <ReactQueryDevtools initialIsOpen={false} />}
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes />
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
