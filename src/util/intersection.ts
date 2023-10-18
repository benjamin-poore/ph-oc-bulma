import { useEffect, useState } from "react";

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observeElements = document.querySelectorAll(".observe");
    const animateLeftElements = document.querySelectorAll(".animate-left");
    const animateRightElements = document.querySelectorAll(".animate-right");
    const animateBottomElements = document.querySelectorAll(".animate-bottom");
    const elements = [
      ...animateLeftElements,
      ...observeElements,
      ...animateRightElements,
      ...animateBottomElements,
    ] as Element[];
    window.removeEventListener("scroll", () => onScroll(elements));
    window.addEventListener("scroll", () => onScroll(elements), {
      passive: true,
    });
    onScroll(elements);
    return () => window.removeEventListener("scroll", () => onScroll(elements));
  }, []);

  const onScroll = (elements: Element[]) => {
    for (const element of elements) {
      const rec = element.getBoundingClientRect();
      if (window.screenTop + window.innerHeight >= rec.top) {
        element.classList.add("is-active");
      }
    }
  };
};
