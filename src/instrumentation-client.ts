import posthog from "posthog-js";

// Runs once in the browser before the app becomes interactive. Without a key
// nothing is initialised and track() keeps logging to the console in development.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    persistence: "memory",
  });
}
