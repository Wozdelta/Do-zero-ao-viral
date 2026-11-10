import test from 'node:test';
import assert from 'node:assert/strict';
import { CLOCK_KEY, visitDeadline, clockLabel } from './clock.js';
function memory(initial) { const values = new Map(initial); return { getItem: k => values.get(k) ?? null, setItem: (k,v) => values.set(k,v) }; }
test('visit persists across reload and elapsed offline time', () => {
  const store = memory(); const start = 1000000; const end = visitDeadline(store,start);
  assert.equal(clockLabel(end,start), '24:00:00');
  assert.equal(visitDeadline(store,start+3600000),end);
  assert.equal(clockLabel(visitDeadline(store,start+3600000),start+3600000),'23:00:00');
});
test('expiration stays at zero without restarting', () => {
  const store=memory([[CLOCK_KEY,'1000']]);
  assert.equal(visitDeadline(store,1000000000),1000);
  assert.equal(clockLabel(1000,1000000000),'00:00:00');
});
test('corrupt or blocked storage does not break rendering', () => {
  assert.equal(visitDeadline(memory([[CLOCK_KEY,'NaN']]),500),86400500);
  assert.equal(visitDeadline({getItem(){throw Error('blocked')}},500),86400500);
});
