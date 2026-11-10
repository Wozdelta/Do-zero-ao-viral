import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { checkoutURL, publicConfig } from './checkout.js';
import { CHECKOUT_URL } from '../shared/offer.js';
const app = express();
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'", "'unsafe-inline'"], imgSrc: ["'self'", 'data:'], fontSrc: ["'self'"], connectSrc: ["'self'"], objectSrc: ["'none'"], frameAncestors: ["'none'"] } } }));
app.use(express.json({limit:'16kb'}));
app.use('/api', rateLimit({ windowMs: 60_000, limit: 60, standardHeaders: 'draft-8', legacyHeaders: false }));
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.get('/api/config', (_, res) => res.set('Cache-Control', 'no-store').json({ ...publicConfig(), adVideoUrl: existsSync(path.join(dist, 'media/anuncio.mp4')) ? '/media/anuncio.mp4' : '' }));
app.post('/api/checkout', (_, res) => {
  const url = checkoutURL(process.env.CAKTO_CHECKOUT_URL || CHECKOUT_URL);
  if (!url) return res.status(503).json({ error: 'O link de pagamento ainda está sendo configurado. Tente novamente mais tarde.' });
  res.set('Cache-Control', 'no-store').json({ url });
});
app.use('/api', (_, res) => res.status(404).json({ error: 'Rota não encontrada.' }));
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../frontend/dist');
if (existsSync(dist)) { app.use(express.static(dist)); app.get('/{*path}', (_, res) => res.sendFile(path.join(dist, 'index.html'))); }
app.use((err, req, res, next) => { if (res.headersSent) return next(err); res.status(500).json({ error: 'Não foi possível concluir. Tente novamente.' }); });
const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, '127.0.0.1', () => console.log(`Do Zero ao Viral: http://127.0.0.1:${port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
