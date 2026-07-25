import { trackEvent, getPageInfo, getTrackLocation } from '../utils/analytics';

window.__hhTrack = trackEvent;

document.addEventListener('click', (e: MouseEvent) => {
  const link = (e.target as Element).closest('a[href^="tel:"]');
  if (!link) return;

  const href = (link as HTMLAnchorElement).href;
  const phoneNumber = href.replace('tel:', '').replace(/\D/g, '');
  const linkText = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);

  trackEvent('phone_click', {
    phone_number: phoneNumber,
    link_text: linkText,
    click_location: getTrackLocation(link),
    ...getPageInfo(),
  });
});
