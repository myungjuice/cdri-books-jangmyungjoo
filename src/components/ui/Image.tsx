import * as React from "react";

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
    <div className="relative inline-block">
      {loading &&
        (loader ?? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="border-t-primary h-6 w-6 animate-spin rounded-full border-2 border-gray-300" />
          </div>
        ))}
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        className={cn(className, loading && "invisible")}
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
