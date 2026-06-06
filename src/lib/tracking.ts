"use client";

export type TrackingParams = Record<
  string,
  string | number | boolean | undefined | null
>;

const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid"
] as const;

declare global {
  interface Window {
    dataLayer?: TrackingParams[];
    fbq?: (
      action: "track" | "trackCustom",
      event: string,
      params?: TrackingParams
    ) => void;
    gtag?: (
      command: "event",
      event: string,
      params?: TrackingParams
    ) => void;
  }
}

export function getAttributionParams() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return attributionKeys.reduce<Record<string, string>>((acc, key) => {
    const value = params.get(key);

    if (value) {
      acc[key] = value;
      window.sessionStorage.setItem(key, value);
    } else {
      const stored = window.sessionStorage.getItem(key);
      if (stored) {
        acc[key] = stored;
      }
    }

    return acc;
  }, {});
}

export function pushTrackingEvent(event: string, params: TrackingParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventParams = {
    ...getAttributionParams(),
    ...params
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...eventParams
  });

  if (window.gtag) {
    window.gtag(
      "event",
      event === "form_submit" ? "generate_lead" : event,
      eventParams
    );
  }

  if (window.fbq) {
    if (event === "form_submit") {
      window.fbq("track", "Lead", eventParams);
    } else {
      window.fbq("trackCustom", event, eventParams);
    }
  }
}
