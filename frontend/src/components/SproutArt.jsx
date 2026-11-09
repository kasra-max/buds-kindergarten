// Hero illustration: a sprout that grows once on page load.
export default function SproutArt() {
  return (
    <svg className="sprout" viewBox="0 0 400 420" role="img" aria-hidden="true">
      <circle cx="318" cy="96" r="52" fill="#FFC83D" />
      <circle cx="70" cy="140" r="14" fill="#F0647A" opacity=".85" />
      <circle cx="105" cy="92" r="8" fill="#2FA36B" opacity=".7" />
      <path d="M0 392 Q200 352 400 392 L400 420 L0 420Z" fill="#2FA36B" />
      <path className="stem" d="M200 396 C200 340 190 280 200 214" stroke="#1E7A4E" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path className="leaf" d="M198 334 C150 334 120 304 118 266 C160 266 192 294 198 334Z" fill="#2FA36B" />
      <path className="leaf" d="M202 294 C250 294 282 264 284 226 C242 226 208 254 202 294Z" fill="#3DBB80" />
      <g transform="translate(200 190)">
        <g className="bloom">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-26" rx="15" ry="28" fill="#F0647A" transform={`rotate(${a})`} />
          ))}
          <circle r="14" fill="#FFC83D" />
        </g>
      </g>
    </svg>
  );
}
