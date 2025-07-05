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

  React.useEffect(() => {
    setImgSrc(src);
    setLoading(true);
  }, [src]);

  return (
    <div className="relative inline-block h-full w-full">
      {loading &&
        (loader ?? (
          <div className="bg-light-gray inset-0 flex h-full w-full items-center justify-center">
            <Spinner size="md" />
          </div>
        ))}

      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className={cn("w-full", className, loading && "invisible")}
        onLoad={() => setLoading(false)}
        onError={() => {
          if (fallbackSrc) setImgSrc(fallbackSrc);
          setLoading(false);
        }}
        {...props}
      />
    </div>
  );
}
