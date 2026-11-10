import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, AudioLines, Clapperboard, Maximize2, Pause, Play, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function HeroFilm({ videoUrl, onExplore }) {
  const video = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  const [motion, setMotion] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches);
  const hasVideo = Boolean(videoUrl) && !failed;
  useEffect(() => { setFailed(false); }, [videoUrl]);
  async function togglePlayback() {
    if (!hasVideo) { setMotion(m => !m); return; }
    if (video.current.paused) { try { await video.current.play(); } catch { setPlaying(false); } }
    else video.current.pause();
  }
  return <div className="film-column">
    <div className="film-heading"><span><i/> ZERO AO VIRAL <b>STUDIO</b></span><span>IDEIAS EM MOVIMENTO <ArrowUpRight size={12}/></span></div>
    <div className={`film-frame film-motion ${motion ? '' : 'film-paused'} ${hasVideo ? 'has-video' : ''}`}>
      {hasVideo ? <video ref={video} src={videoUrl} className="hero-video" poster="/media/anuncio-poster.jpg" autoPlay={motion} muted={muted} loop playsInline controls preload="metadata" onError={() => setFailed(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onVolumeChange={e=>setMuted(e.currentTarget.muted)} onTimeUpdate={e=>setProgress(e.currentTarget.duration?e.currentTarget.currentTime/e.currentTarget.duration:0)} aria-label="Vídeo de apresentação do Do Zero ao Viral"/> : <>
        <img className="film-art" src="/images/hero.webp" alt="Símbolo de play em vidro ciano envolvido em uma fita tridimensional violeta" width="1672" height="941" fetchPriority="high"/>
        <div className="film-grid" aria-hidden="true"/>
        <div className="film-topline"><span><span className="live-light"/> DEMONSTRAÇÃO VISUAL</span><Clapperboard size={16}/></div>
        <div className="film-composition"><span className="composition-kicker">UMA IDEIA MUDA TUDO.</span><div className="film-word">DÊ O<br/><span>PLAY.</span></div><button className="film-play" onClick={onExplore} aria-label="Explorar demonstração visual"><Play size={23} fill="currentColor"/><span>Explore<br/><b>o processo</b></span><ArrowUpRight size={14}/></button></div>
        <div className="film-caption"><span className="caption-line"/>DA SUA CABEÇA.<br/><b>PARA A TELA.</b></div>
        <span className="film-corner tl"/><span className="film-corner br"/>
      </>}
    </div>
    <div className="film-toolbar"><button onClick={togglePlayback} aria-label={hasVideo ? playing ? 'Pausar vídeo' : 'Reproduzir vídeo' : motion ? 'Pausar animação do destaque' : 'Reproduzir animação do destaque'}>{(hasVideo ? playing : motion) ? <Pause size={13}/> : <Play size={13}/>}</button><div className="film-time-track" aria-hidden="true"><span style={hasVideo?{width:`${progress*100}%`}:undefined}/></div><span>{hasVideo ? 'APRESENTAÇÃO' : 'PROCESSO CRIATIVO'}</span>{hasVideo ? <button className="film-sound" onClick={() => setMuted(m => !m)} aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}>{muted ? <VolumeX size={15}/> : <Volume2 size={15}/>}<span>{muted?'ATIVAR SOM':'SOM ATIVADO'}</span></button> : <button onClick={onExplore} aria-label="Ampliar demonstração"><Maximize2 size={14}/></button>}</div>
    <div className="film-chapters">{[[Clapperboard,'01','A ideia vira roteiro'],[AudioLines,'02','A voz cria o ritmo'],[Sparkles,'03','O motion dá vida']].map(([Icon,n,t]) => <div key={n}><Icon size={18}/><span><small>CAPÍTULO {n}</small><b>{t}</b></span></div>)}</div>
    {failed && <p className="film-error" role="status">O vídeo não carregou. Você pode explorar a demonstração visual enquanto isso.</p>}
  </div>;
}
