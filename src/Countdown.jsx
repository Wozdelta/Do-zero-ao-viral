export default function Countdown({ value }) {
  return <time className="countdown-display" aria-label={`Tempo restante do ciclo: ${value}`}>
    {value.split(':').map((part, index) => <span className="countdown-part" key={index}>
      {index > 0 && <span className="countdown-colon" aria-hidden="true">:</span>}
      <span className="countdown-digits" aria-hidden="true">{part}</span>
    </span>)}
  </time>;
}
