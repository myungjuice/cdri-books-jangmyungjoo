import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <main className="mx-auto w-full max-w-[960px] flex-1 py-20">
        <Outlet />
      </main>
    </div>
  );
}
