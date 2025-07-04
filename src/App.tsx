import { Suspense } from "react";

import { Routes } from "@/pages/Routes";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <Routes />
      </Suspense>
    </>
  );
}
