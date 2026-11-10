import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { publicConfig } from './lib/settings.js';

function localConfiguration() {
  const attach = server => {
    server.middlewares.use('/api/config', (req,res,next) => {
      if((req.url || '/').split('?')[0] !== '/') return next();
      if(req.method !== 'GET') {res.statusCode=405;res.setHeader('Allow','GET');return res.end();}
      const hasVideo=existsSync(fileURLToPath(new URL('./public/media/anuncio.mp4',import.meta.url)));
      res.setHeader('Content-Type','application/json; charset=utf-8');
      res.setHeader('Cache-Control','no-store');
      res.end(JSON.stringify({...publicConfig(),adVideoUrl:hasVideo?'/media/anuncio.mp4':''}));
    });
  };
  return {name:'local-site-config',configureServer:attach,configurePreviewServer:attach};
}
export default defineConfig({plugins:[react(),tailwindcss(),localConfiguration()]});
