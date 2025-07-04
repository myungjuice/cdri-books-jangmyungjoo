import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

import { Routes } from "@/pages/Routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}
