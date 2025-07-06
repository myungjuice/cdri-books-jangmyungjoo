import { X as LucideX } from "lucide-react";
import * as React from "react";

import Spinner from "@/components/shared/Spinner";
import { cn } from "@/libs/utils";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
  alt: string;
  loader?: React.ReactNode;
};

export default function Image({ src, alt, fallbackSrc, loader, className, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setLoading(true);
  }, [src]);

  return (
    <div className="relative inline-block h-full w-full">
      {imgSrc &&
        loading &&
        (loader ?? (
          <div className="inset-0 flex h-full w-full items-center justify-center">
            <Spinner size="md" />
          </div>
        ))}

      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          loading="lazy"
          className={cn("w-full", className, loading && "invisible")}
          onLoad={() => setLoading(false)}
          onError={() => {
            if (fallbackSrc) setIsError(true);
            setLoading(false);
          }}
          {...props}
        />
      )}

      {(isError || !imgSrc) && (
        <div className="bg-light-gray flex h-full items-center justify-center">
          <LucideX className="h-8 w-8 text-gray-400" />
        </div>
      )}
    </div>
  );
}
