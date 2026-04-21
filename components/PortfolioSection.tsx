"use client";

import { useEffect, useState } from "react";
import { portfolioItems } from "@/lib/data";

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f6f1e8] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[28px] bg-neutral-200">
          <div className="relative aspect-[16/10] w-full md:aspect-[16/8]">
            {portfolioItems.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[1.03]"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-14">
            {portfolioItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="group text-left"
                >
                  <span
                    className={`block text-[1rem] md:text-[1.15rem] ${
                      isActive ? "text-neutral-900" : "text-neutral-500"
                    } transition-colors duration-500`}
                  >
                    {item.name}
                  </span>

                  <span className="mt-2 block h-px w-full overflow-hidden bg-neutral-300">
                    <span
                      className={`block h-full bg-neutral-700 transition-all duration-700 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {portfolioItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para ${item.name}`}
                  className={`h-3 w-3 rounded-full border border-neutral-500 transition-all duration-500 ${
                    isActive ? "bg-neutral-700" : "bg-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
