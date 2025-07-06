import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import ErrorFallback from "@/components/shared/ErrorFallback";
import ProgressBar from "@/components/shared/ProgressBar";

import Header from "./Header";

export default function RootLayout() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex min-h-screen w-full flex-col items-center">
        <ProgressBar />
        <Header />
        <main className="mx-auto w-full max-w-[960px] flex-1 py-20">
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
}
