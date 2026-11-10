import test from 'node:test';
import assert from 'node:assert/strict';
import { checkoutURL, publicConfig } from '../lib/settings.js';
test('only accepts official HTTPS offer URLs', () => {
  assert.equal(checkoutURL('https://pay.cakto.com.br/oferta-exemplo'), 'https://pay.cakto.com.br/oferta-exemplo');
  for (const url of ['', 'javascript:alert(1)', 'http://pay.cakto.com.br/x', 'https://pay.cakto.com.br.evil.com/x', 'https://user:pass@pay.cakto.com.br/x', 'https://pay.cakto.com.br/', 'https://pay.cakto.com.br:999/x']) assert.equal(checkoutURL(url), null);
});
test('official offer link and supplied prices work without API credentials', () => {
  const cfg = publicConfig({}); assert.equal(cfg.checkoutReady, true); assert.equal(cfg.referenceConfirmed, true); assert.equal(cfg.price, 99.99); assert.equal(cfg.referencePrice, 349.99);
  assert.equal(publicConfig({ REFERENCE_PRICE_CONFIRMED: 'false' }).referenceConfirmed, false);
  assert.equal(JSON.stringify(cfg).includes('secret'), false);
});
