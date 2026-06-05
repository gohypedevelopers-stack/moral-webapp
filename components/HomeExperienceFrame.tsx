"use client";

import { useCallback, useEffect, useState } from "react";

const linkMap: Record<string, string> = {
  Shop: "/shop",
  About: "/about",
  Campaign: "/campaign",
  Journal: "/journal",
  Newsletter: "/newsletter",
  "New Arrivals": "/collections/new-arrivals",
  Men: "/collections/men",
  Women: "/collections/women",
  "Limited Edition": "/collections/limited-edition",
  Sustainability: "/sustainability",
  Contact: "/contact",
  Privacy: "/privacy",
  Terms: "/terms",
  Shipping: "/shipping",
};

function normalize(text: string | null | undefined) {
  return (text ?? "").replace(/\s+/g, " ").trim();
}

function applyMobileScrollFix(doc: Document) {
  if (!doc.head || doc.getElementById("moral-mobile-scroll-fix")) {
    return;
  }

  const style = doc.createElement("style");
  style.id = "moral-mobile-scroll-fix";
  style.textContent = `
    html, body {
      overscroll-behavior-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    body {
      touch-action: pan-y;
    }

    img,
    video,
    image-slot,
    .card__media,
    .reframe-wrap,
    .cat,
    .cat__overlay,
    .gram__cell,
    .campaign__media,
    .hero__video,
    .rail {
      touch-action: pan-y;
    }

    @media (max-width: 900px) {
      .hero {
        min-height: 132dvh !important;
        background: #000 !important;
      }

      .hero__sticky {
        min-height: 54dvh !important;
        height: 54dvh !important;
        background: #000 !important;
      }

      .hero__sticky {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
      }

      .hero__video {
        width: 100% !important;
        height: 100% !important;
        background: #000 !important;
      }

      .crest {
        top: 37% !important;
        transform: translate(-50%, -37%) scale(0.64) !important;
      }

      .hero__tag {
        top: auto !important;
        bottom: 1.9rem !important;
        transform: none !important;
      }

      .hero__scroll {
        bottom: 0.25rem !important;
      }

      .split__grid {
        grid-template-columns: 1fr !important;
      }

      .split__left {
        min-height: 34dvh !important;
        max-height: 34dvh !important;
      }

      .glyphfield,
      .split__mark {
        transform: scale(0.78) !important;
        transform-origin: center !important;
      }

      .split__right {
        padding-top: 1.25rem !important;
      }

      .split__block {
        margin-top: 0 !important;
      }

      .values {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        gap: 0.75rem !important;
        align-items: center !important;
        justify-content: flex-start !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        white-space: nowrap !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .values span {
        flex: 0 0 auto !important;
      }

      img,
      video,
      image-slot,
      .hero__video,
      .campaign__media image-slot,
      .gram__cell image-slot,
      .card__media image-slot,
      .reframe-wrap image-slot {
        pointer-events: none !important;
      }

      .rail {
        overflow-x: auto !important;
        overflow-y: visible !important;
        -webkit-overflow-scrolling: touch;
        touch-action: pan-x pan-y;
        scroll-behavior: smooth !important;
        scroll-snap-type: x proximity;
      }

      .rail > * {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
    }
  `;

  doc.head.appendChild(style);
}

function bindMobileRailScroll(doc: Document) {
  const rail = doc.getElementById("rail");

  if (!rail || rail.dataset.moralRailBound) {
    return;
  }

  rail.dataset.moralRailBound = "true";

  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let isDragging = false;
  let movedHorizontally = false;

  const snapToNearestCard = () => {
    const cards = Array.from(rail.children) as HTMLElement[];

    if (!cards.length) {
      return;
    }

    let nearestCard = cards[0];
    let nearestDistance = Math.abs(cards[0].offsetLeft - rail.scrollLeft);

    cards.forEach((card) => {
      const distance = Math.abs(card.offsetLeft - rail.scrollLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestCard = card;
      }
    });

    rail.scrollTo({
      left: nearestCard.offsetLeft,
      behavior: "smooth",
    });
  };

  rail.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      startX = touch.clientX;
      startY = touch.clientY;
      startScrollLeft = rail.scrollLeft;
      isDragging = false;
      movedHorizontally = false;
    },
    { passive: true },
  );

  rail.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];

      if (!touch) {
        return;
      }

      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }

      isDragging = true;
      movedHorizontally = true;
      rail.scrollLeft = startScrollLeft - deltaX;
      event.preventDefault();
      event.stopPropagation();
    },
    { passive: false },
  );

  rail.addEventListener("touchend", () => {
    if (movedHorizontally) {
      snapToNearestCard();
    }

    isDragging = false;
  });

  rail.querySelectorAll<HTMLElement>("a, button").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (isDragging) {
        event.preventDefault();
      }
    });
  });
}

export function HomeExperienceFrame() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scheduleLoad = () => setShouldLoad(true);
    const browserWindow = globalThis.window;

    if (typeof browserWindow.requestIdleCallback === "function") {
      const idleId = browserWindow.requestIdleCallback(scheduleLoad, {
        timeout: 300,
      });

      return () => browserWindow.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(scheduleLoad, 32);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  const patchLinks = useCallback(
    (iframe: HTMLIFrameElement | null) => {
      const doc = iframe?.contentDocument;

      if (!doc) {
        return;
      }

      applyMobileScrollFix(doc);
      bindMobileRailScroll(doc);

      const applyMappings = () => {
        const anchors = Array.from(doc.querySelectorAll<HTMLAnchorElement>("a"));
        const media = Array.from(
          doc.querySelectorAll<HTMLElement>("img, video, image-slot"),
        );

        anchors.forEach((anchor) => {
          const label = normalize(anchor.textContent);
          const href = linkMap[label];

          if (!href) {
            return;
          }

          anchor.setAttribute("href", href);
          anchor.setAttribute("target", "_top");
          anchor.setAttribute("rel", "noopener");

          anchor.onclick = (event) => {
            event.preventDefault();
            window.location.href = href;
          };
        });

        media.forEach((element) => {
          element.setAttribute("draggable", "false");
        });

        const documentBody = doc.body;
        if (documentBody && !documentBody.dataset.moralScrollFixBound) {
          documentBody.dataset.moralScrollFixBound = "true";

          let startX = 0;
          let startY = 0;

          documentBody.addEventListener(
            "touchstart",
            (event) => {
              const touch = event.touches[0];

              if (!touch) {
                return;
              }

              startX = touch.clientX;
              startY = touch.clientY;
            },
            { passive: true, capture: true },
          );

          documentBody.addEventListener(
            "touchmove",
            (event) => {
              const touch = event.touches[0];

              if (!touch) {
                return;
              }

              const deltaX = Math.abs(touch.clientX - startX);
              const deltaY = Math.abs(touch.clientY - startY);

              if (deltaY > deltaX) {
                event.stopPropagation();
              }
            },
            { passive: true, capture: true },
          );
        }
      };

      applyMappings();

      const observer = new MutationObserver(() => {
        applyMappings();
      });

      observer.observe(doc.body, {
        childList: true,
        subtree: true,
      });
    },
    [],
  );

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100dvh",
        backgroundColor: "#0a0a0a",
      }}
    >
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            padding: "24px",
            backgroundColor: "#0a0a0a",
          }}
        >
          <img
            src="/loader.jpeg"
            alt="Loading MORAL"
            style={{
              width: "min(100%, 420px)",
              height: "auto",
              maxHeight: "70dvh",
              objectFit: "cover",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </div>
      )}
      {shouldLoad && (
        <iframe
          className="experience-frame"
          src="/moral-experience.html"
          title="MORAL Experience"
          style={{ visibility: loaded ? "visible" : "hidden" }}
          onLoad={(event) => {
            patchLinks(event.currentTarget);
            setLoaded(true);
          }}
        />
      )}
    </div>
  );
}
