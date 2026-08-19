import type { ReactNode } from "react";

type PageSheetProps = {
  children: ReactNode;
  width?: "narrow" | "wide";
};

export function PageSheet({ children, width = "narrow" }: PageSheetProps) {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div
        className={`mx-auto bg-paper px-6 py-12 text-ink shadow-[0_24px_60px_rgb(0_0_0/0.28)] sm:px-12 sm:py-16 ${
          width === "wide" ? "max-w-4xl" : "max-w-2xl"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
