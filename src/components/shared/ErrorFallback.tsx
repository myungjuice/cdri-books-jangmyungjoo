import { AlertTriangleIcon } from "lucide-react";
import { useErrorBoundary } from "react-error-boundary";

import Button from "@/components/ui/Button";

type Props = {
  error: Error;
};

export default function ErrorFallback({ error }: Props) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert" className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center rounded-full">
          <AlertTriangleIcon className="text-red h-20 w-20" aria-hidden />
        </div>
        <p className="text-caption text-red-500">예기치 못한 에러가 발생했습니다:</p>
      </div>
      <pre className="bg-light-gray rounded-md p-4 text-black">{error.message}</pre>
      <Button onClick={resetBoundary}>다시 시도</Button>
    </div>
  );
}
