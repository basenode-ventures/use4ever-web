import type { ReactNode } from "react";

type PageSheetProps = {
  children: ReactNode;
  width?: "narrow" | "wide";
};

export function PageSheet({ children, width = "narrow" }: PageSheetProps) {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div
        className={`mx-auto border border-verdigris/10 bg-white px-6 py-12 text-ink sm:px-12 sm:py-16 ${
          width === "wide" ? "max-w-4xl" : "max-w-2xl"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
