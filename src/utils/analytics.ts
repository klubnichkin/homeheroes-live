declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    __hhTrack: typeof trackEvent;
  }
}

const IS_DEBUG = import.meta.env.PUBLIC_GA_DEBUG === 'true';

export type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;

  const enriched: EventParams = { ...params };

  if (IS_DEBUG) {
    const safe = Object.fromEntries(
      Object.entries(enriched).filter(
        ([k]) => !['phone', 'phone_number', 'email', 'name', 'first_name', 'last_name', 'address', 'message'].includes(k)
      )
    );
    console.log(`[HH Analytics] ${eventName}`, { ...safe, debug_mode: true });
  }

  if (typeof window.gtag !== 'function') {
    if (IS_DEBUG) console.warn('[HH Analytics] gtag not ready — event dropped:', eventName);
    return;
  }

  window.gtag('event', eventName, IS_DEBUG ? { ...enriched, debug_mode: true } : enriched);
}

export function getPageInfo(): { page_location: string; page_path: string } {
  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
  };
}

export function getTrackLocation(element: Element): string {
  let el: Element | null = element;
  while (el && el !== document.documentElement) {
    const loc = (el as HTMLElement).dataset?.trackLocation;
    if (loc) return loc;

    const tag = el.tagName.toLowerCase();
    if (tag === 'header') return 'header';
    if (tag === 'footer') return 'footer';

    const id = (el.id || '').toLowerCase();
    if (id === 'sticky-mobile-cta') return 'mobile_sticky';
    if (id === 'emergency-banner') return 'emergency_banner';

    el = el.parentElement;
  }
  return 'unknown';
}
