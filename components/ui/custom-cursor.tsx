"use client";

import { useEffect, useRef, useState } from "react";

const TEXT_TARGET =
  '[data-cursor-group], [data-cursor-line], [data-cursor="text"], h1, h2, h3, h4, h5, h6, p, span, li, label, small, strong, em, blockquote, figcaption, code';
const CONTROL_TARGET = "a, button";

type PendingCleanup = {
  element: HTMLElement;
  onEnd: (event: TransitionEvent) => void;
  timer: number;
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(finePointer.matches && !reducedMotion.matches);

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.body.classList.add("custom-cursor-active");

    let frame = 0;
    let radiusFrame = 0;
    let initialized = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let activeElement: HTMLElement | null = null;
    let activeRect: DOMRect | null = null;
    let pendingCleanup: PendingCleanup | null = null;

    const cleanElement = (element: HTMLElement) => {
      element.removeAttribute("data-cursor-active");
      element.style.removeProperty("--cursor-base");
      element.style.removeProperty("--cursor-x");
      element.style.removeProperty("--cursor-y");
      element.style.removeProperty("--cursor-r");
      element.style.removeProperty("--cursor-background");
    };

    const finishPendingCleanup = () => {
      if (!pendingCleanup) return;
      const { element, onEnd, timer } = pendingCleanup;
      element.removeEventListener("transitionend", onEnd);
      window.clearTimeout(timer);
      cleanElement(element);
      pendingCleanup = null;
    };

    const deactivateText = (immediate = false) => {
      if (!activeElement) return;

      const element = activeElement;
      activeElement = null;
      activeRect = null;
      cancelAnimationFrame(radiusFrame);

      if (immediate) {
        cleanElement(element);
        return;
      }

      element.style.setProperty("--cursor-r", "0px");

      const onEnd = (event: TransitionEvent) => {
        if (event.propertyName === "--cursor-r") finishPendingCleanup();
      };
      const timer = window.setTimeout(finishPendingCleanup, 250);

      element.addEventListener("transitionend", onEnd);
      pendingCleanup = { element, onEnd, timer };
    };

    const activateText = (element: HTMLElement) => {
      if (activeElement === element) return;

      finishPendingCleanup();
      deactivateText(true);

      activeElement = element;
      activeRect = element.getBoundingClientRect();
      const styles = getComputedStyle(element);
      element.style.setProperty("--cursor-base", styles.color);
      element.style.setProperty("--cursor-background", styles.backgroundColor);
      element.style.setProperty("--cursor-r", "0px");
      element.setAttribute("data-cursor-active", "");

      radiusFrame = requestAnimationFrame(() => {
        if (activeElement === element) {
          element.style.setProperty("--cursor-r", "6px");
        }
      });
    };

    const resolveTextTarget = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      if (!element) return null;

      const control = element.closest<HTMLElement>(CONTROL_TARGET);
      if (control) return control;

      const group = element.closest<HTMLElement>("[data-cursor-group]");
      if (group) return group;

      const semanticText = element.closest<HTMLElement>(TEXT_TARGET);
      if (semanticText) {
        if (semanticText.hasAttribute("data-cursor-container")) return null;

        const isSplitHeading =
          semanticText.matches("h1, h2, h3, h4, h5, h6") &&
          semanticText.querySelector(":scope > [data-cursor-line]");
        return isSplitHeading ? null : semanticText;
      }

      let candidate: HTMLElement | null = element as HTMLElement;
      while (candidate && candidate !== document.body) {
        const hasDirectText = Array.from(candidate.childNodes).some(
          (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
        );
        if (hasDirectText) return candidate;
        candidate = candidate.parentElement;
      }

      return null;
    };

    const syncTarget = (target: EventTarget | null) => {
      const textTarget = resolveTextTarget(target);

      if (textTarget) {
        activateText(textTarget);
        cursor.dataset.kind = "text";
      } else {
        deactivateText();
        cursor.dataset.kind = "default";
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!initialized) {
        currentX = targetX;
        currentY = targetY;
        initialized = true;
      }

      cursor.dataset.visible = "true";
    };

    const onPointerOver = (event: PointerEvent) => {
      cursor.dataset.visible = "true";
      syncTarget(event.target);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        cursor.dataset.visible = "false";
        cursor.dataset.kind = "default";
        deactivateText();
        return;
      }

      syncTarget(event.relatedTarget);
    };

    const refreshRect = () => {
      if (activeElement) activeRect = activeElement.getBoundingClientRect();
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (activeElement && activeRect) {
        activeElement.style.setProperty("--cursor-x", `${currentX - activeRect.left}px`);
        activeElement.style.setProperty("--cursor-y", `${currentY - activeRect.top}px`);
      }

      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    window.addEventListener("scroll", refreshRect, true);
    window.addEventListener("resize", refreshRect);
    frame = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("scroll", refreshRect, true);
      window.removeEventListener("resize", refreshRect);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(radiusFrame);
      finishPendingCleanup();
      if (activeElement) cleanElement(activeElement);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-kind="default"
      data-visible="false"
      className="custom-cursor"
    >
      <span />
    </div>
  );
}
