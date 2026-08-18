import { Button } from "@/components/ui/button";
import { PLANS, PRICING_SECTION } from "@/lib/content";
import { Check } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            {PRICING_SECTION.eyebrow}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {PRICING_SECTION.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {PRICING_SECTION.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.featured ? "ring-2 ring-red-500" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period ? (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {plan.period}
                    </span>
                  ) : null}
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                className={`mt-8 rounded-full ${
                  plan.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                <Link href="/cadastro">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
