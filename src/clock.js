export const CLOCK_KEY = 'zav:visit-deadline:v1';
export function visitDeadline(storage, now = Date.now()) {
  try {
    const saved = Number(storage.getItem(CLOCK_KEY));
    if (Number.isFinite(saved) && saved > 0) return saved;
    const deadline = now + 86400000;
    storage.setItem(CLOCK_KEY, String(deadline));
    return deadline;
  } catch { return now + 86400000; }
}
export function clockLabel(deadline, now = Date.now()) {
  const ms = Math.max(0, deadline - now);
  return [Math.floor(ms / 3600000), Math.floor(ms / 60000) % 60, Math.floor(ms / 1000) % 60].map(x => String(x).padStart(2, '0')).join(':');
}
