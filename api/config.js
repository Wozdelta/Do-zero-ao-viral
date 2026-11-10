import { publicConfig } from '../lib/settings.js';

export default function handler(request, response) {
  if(request.method!=='GET') {
    response.setHeader('Allow','GET');
    return response.status(405).json({error:'Método não permitido.'});
  }
  response.setHeader('Cache-Control','no-store');
  return response.status(200).json({
    ...publicConfig(),
    adVideoUrl:process.env.AD_VIDEO_ENABLED!=='false'?'/media/anuncio.mp4':''
  });
}
