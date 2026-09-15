"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import {
  getEventsSnapshot,
  getServerEventsSnapshot,
  isDebugEnabled,
  subscribeToEvents,
} from "@/lib/analytics";

// Developer tool, not page copy: labels live here rather than in src/content.
const LABELS = {
  toggle: "Eventi",
  panel: "Eventi analytics",
  empty: "Nessun evento registrato.",
};

const PANEL_ID = "analytics-debug-panel";

const noopSubscribe = () => () => {};

function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString("it-IT", { hour12: false });
}

export function AnalyticsDebugPanel() {
  const enabled = useSyncExternalStore(noopSubscribe, isDebugEnabled, () => false);
  const events = useSyncExternalStore(subscribeToEvents, getEventsSnapshot, getServerEventsSnapshot);
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLOListElement>(null);

  // Keep the newest event in view.
  useEffect(() => {
    const list = listRef.current;
    if (open && list) list.scrollTop = list.scrollHeight;
  }, [open, events.length]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!enabled) return null;

  return (
    <div className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 flex flex-col items-end gap-2">
      {open && (
        <section
          id={PANEL_ID}
          aria-label={LABELS.panel}
          className="flex max-h-[60vh] w-[min(26rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-border bg-card text-foreground shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <p className="label-medium font-semibold uppercase">{LABELS.panel}</p>
            <span className="label-small text-muted-foreground">{events.length}</span>
          </div>
          {events.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">{LABELS.empty}</p>
          ) : (
            <ol ref={listRef} className="flex flex-col divide-y divide-border overflow-y-auto">
              {events.map((event) => (
                <li key={event.id} className="flex flex-col gap-1 px-4 py-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold">{event.name}</span>
                    <time
                      dateTime={new Date(event.timestamp).toISOString()}
                      className="label-small text-muted-foreground"
                    >
                      {formatTime(event.timestamp)}
                    </time>
                  </div>
                  <pre className="overflow-x-auto rounded-md bg-muted p-2 text-xs leading-[1.5] whitespace-pre-wrap break-all">
                    {JSON.stringify(event.payload, null, 2)}
                  </pre>
                </li>
              ))}
            </ol>
          )}
        </section>
      )}
      <Button
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpen((current) => !current)}
        className="shadow-lg"
      >
        {LABELS.toggle} ({events.length})
      </Button>
    </div>
  );
}
