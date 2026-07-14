// Guarded service worker registration. Never registers in dev, Lovable preview, iframe,
// or when ?sw=off is set. See PWA skill.
const SW_URL = "/sw.js";

function isBlockedEnv(): boolean {
  if (typeof window === "undefined") return true;
  if (!import.meta.env.PROD) return true;
  try {
    if (window.self !== window.top) return true;
  } catch {
    return true;
  }
  const host = window.location.hostname;
  if (
    host.startsWith("id-preview--") ||
    host.startsWith("preview--") ||
    host === "lovableproject.com" ||
    host.endsWith(".lovableproject.com") ||
    host === "lovableproject-dev.com" ||
    host.endsWith(".lovableproject-dev.com") ||
    host === "beta.lovable.dev" ||
    host.endsWith(".beta.lovable.dev")
  ) {
    return true;
  }
  if (new URLSearchParams(window.location.search).get("sw") === "off") return true;
  return false;
}

async function unregisterMatching() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    for (const r of regs) {
      const url = r.active?.scriptURL || r.installing?.scriptURL || r.waiting?.scriptURL || "";
      if (url.endsWith(SW_URL)) await r.unregister();
    }
  } catch {}
}

export function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  if (isBlockedEnv()) {
    void unregisterMatching();
    return;
  }
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(SW_URL, { scope: "/" }).catch(() => {});
  });
}
