import { CHECKOUT_URL } from '../shared/offer.js';
export function checkoutURL(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.hostname !== 'pay.cakto.com.br' || url.username || url.password || url.port || url.pathname === '/') return null;
    return url.href;
  } catch { return null; }
}
export function publicConfig(env = process.env) {
  return {
    checkoutReady: Boolean(checkoutURL(env.CAKTO_CHECKOUT_URL || CHECKOUT_URL)),
    price: 99.99, referencePrice: 349.99,
    referenceConfirmed: env.REFERENCE_PRICE_CONFIRMED !== 'false',
    sellerName: env.SELLER_NAME || '', sellerDocument: env.SELLER_DOCUMENT || '',
    supportEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(env.SUPPORT_EMAIL || '') ? env.SUPPORT_EMAIL : ''
  };
}
