"use client";

import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/content";
import Link from "next/link";
import { useMemo } from "react";

function GridBackground() {
  const squares = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: `square-${i}`,
      delay: (Math.random() * 5).toFixed(2),
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute inset-0 grid grid-cols-4 gap-2 p-12 md:grid-cols-8">
        {squares.map((square) => (
          <div
            key={square.id}
            className="aspect-square animate-memory-pulse rounded-xl bg-primary/5"
            style={{
              animationDelay: `${square.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <GridBackground />

      <div className="relative px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
              </div>
              <h1 className="relative mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {HERO.titleLine1}
                <br />
                <span className="text-primary">{HERO.titleLine2}</span>
              </h1>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {HERO.description}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/cadastro">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                  {HERO.cta}
                </Button>
              </Link>
              <Link
                href="/manifesto"
                className="group text-sm font-semibold leading-6 text-gray-900"
              >
                {HERO.learnMore}{" "}
                <span
                  className="inline-block transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary/30 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}
