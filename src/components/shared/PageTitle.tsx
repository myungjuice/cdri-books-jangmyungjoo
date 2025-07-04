import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <div className="mb-4">
      <h1 className="text-title-2 text-text-title">{children}</h1>
    </div>
  );
}
