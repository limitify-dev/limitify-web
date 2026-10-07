// components/sections/faq.tsx
"use client";

import { useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "What kind of software does Limitify build?",
    a: "We build custom web applications, mobile applications, internal business systems, APIs, SaaS products, and other digital products tailored to a specific business or problem.",
  },
  {
    q: "Can you help if I only have an idea?",
    a: "Absolutely. You don't need to have everything figured out before reaching out. We can help clarify the problem, explore possible solutions, define the scope, and determine what should be built first.",
  },
  {
    q: "Do you work with existing products and systems?",
    a: "Yes. We can work with an existing product, codebase, or internal system. Depending on the situation, we can improve an existing application, add new functionality, fix technical issues, or help plan the next stage of development.",
  },
  {
    q: "How does a project usually start?",
    a: "We begin with a conversation about the problem, your goals, users, constraints, and what you already have. From there, we help define the appropriate scope and next steps before development begins.",
  },
  {
    q: "How much does a project cost?",
    a: "There isn't one fixed price because projects vary significantly in scope and complexity. After understanding what you need, we can recommend an appropriate approach and provide a clear estimate.",
  },
  {
    q: "How long does it take to build a product?",
    a: "Timelines depend on the scope, complexity, and level of involvement required. Smaller projects can move quickly, while larger products are usually delivered through smaller milestones so progress stays visible throughout development.",
  },
  {
    q: "Who owns the software after it is built?",
    a: "Ownership and licensing are agreed as part of the project. Our goal is to make the ownership, usage rights, and responsibilities clear before development starts.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We can continue working with your team after launch through maintenance, improvements, technical support, and ongoing product development.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="
        scroll-mt-24
        px-4
        py-24
        md:py-32
      "
    >
      <div className="mx-auto max-w-5xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <SectionHeading label="FAQs">
              Questions, answered.
            </SectionHeading>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-muted-foreground
              md:ml-auto
            "
          >
            A few things clients commonly ask before starting a
            project with us. If you don&apos;t see your question here,
            we&apos;re always happy to talk.
          </p>
        </div>

        {/* =====================================================
            FAQ LIST
        ===================================================== */}

        <div
          className="
            mt-16
            border-t
            border-black/8
            dark:border-white/8
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="
                  border-b
                  border-black/[0.08]
                  dark:border-white/[0.08]
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left

                    sm:py-7
                  "
                >
                  {/* Question */}
                  <span
                    className={`
                      max-w-2xl
                      text-sm
                      font-medium
                      tracking-[-0.01em]
                      transition-colors
                      duration-200

                      sm:text-base

                      ${
                        isOpen
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }
                    `}
                  >
                    {faq.q}
                  </span>

                  {/* Icon */}
                  <span
                    className={`
                      grid
                      size-8
                      shrink-0
                      place-items-center
                      rounded-full
                      border
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? "border-blue-500/30 bg-blue-500/[0.07] text-blue-600 dark:border-blue-400/30 dark:bg-blue-400/[0.07] dark:text-blue-400"
                          : "border-black/[0.08] text-muted-foreground/50 group-hover:border-blue-500/20 group-hover:text-blue-600 dark:border-white/[0.08] dark:group-hover:border-blue-400/20 dark:group-hover:text-blue-400"
                      }
                    `}
                  >
                    <ArrowDownRight
                      className={`
                        size-3.5
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-[-90deg]" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pr-12 sm:pb-8">
                      <p
                        className="
                          max-w-2xl
                          text-sm
                          leading-7
                          text-muted-foreground
                        "
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-muted-foreground">
            Still have a question?
          </p>

          <a
            href="/contact"
            className="
              text-xs
              font-medium
              text-foreground
              transition-colors
              hover:text-blue-600
              dark:hover:text-blue-400
            "
          >
            Talk to the team →
          </a>
        </div>
      </div>
    </section>
  );
}