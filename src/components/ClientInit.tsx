// app/components/ClientInit.tsx
"use client";

import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    // ===== Scroll reveal =====
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if ("IntersectionObserver" in window && items.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );
      items.forEach((el) => io.observe(el));
    } else {
      items.forEach((el) => el.classList.add("is-visible"));
    }

    // ===== Active nav link on scroll =====
    const links = document.querySelectorAll<HTMLAnchorElement>(
      '.nav__links a[data-nav]'
    );
    const sections = Array.from(links)
      .map((link) => document.getElementById(link.dataset.nav!))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const link = document.querySelector<HTMLAnchorElement>(
              `.nav__links a[data-nav="${entry.target.id}"]`
            );
            if (!link) return;
            if (entry.isIntersecting) {
              links.forEach((l) => l.classList.remove("is-active"));
              link.classList.add("is-active");
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      sections.forEach((s) => io.observe(s));
    }
  }, []);

  return null;
}