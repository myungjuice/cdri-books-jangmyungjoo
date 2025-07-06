import { AlertTriangleIcon } from "lucide-react";

type Props = {
  text?: string;
};

export default function Error({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <div className="flex items-center justify-center rounded-full">
        <AlertTriangleIcon className="text-red h-20 w-20" aria-hidden />
      </div>
      <p className="text-caption text-red">
        {text ?? "시스템 에러입니다. 잠시 후 다시 시도해주세요."}
      </p>
    </div>
  );
}
