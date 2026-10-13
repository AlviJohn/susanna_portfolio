import { useEffect, useMemo, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks'

const MILESTONES = [
  { x: 34, y: 214, yr: '2015 – 2016', co: 'LSE', name: 'The London School of Economics and Political Science', role: 'MSc, Management and Strategy' },
  { x: 132, y: 168, yr: '2017 – 2022', co: 'KPMG India', name: 'KPMG India', role: 'Associate Consultant → Management Consultant, Strategy and Operations' },
  { x: 250, y: 112, yr: '2022 – 2023', co: 'Revolut', name: 'Revolut', role: 'Product Operations Manager, FinCrime Product' },
  { x: 356, y: 40, yr: '2023 – Present', co: 'Lido Finance', name: 'Lido Finance', role: 'Operations Manager: Special Projects → Compliance & Risk' },
]
const DRAW_MS = 9000
const HOLD_MS = 2600

// Deterministic jitter gives the line a price-chart feel without changing between renders.
function buildPoints() {
  const pts = []
  const idx = []
  let seed = 7
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  MILESTONES.forEach((m, i) => {
    if (i > 0) {
      const p = MILESTONES[i - 1]
      for (let k = 1; k < 7; k++) {
        const f = k / 7
        pts.push([p.x + (m.x - p.x) * f, p.y + (m.y - p.y) * f + (rnd() - 0.35) * 22])
      }
    }
    idx.push(pts.length)
    pts.push([m.x, m.y])
  })
  return { pts, idx }
}

export default function CareerChart() {
  const { pts, idx, d, area, lens, total, candles } = useMemo(() => {
    const { pts, idx } = buildPoints()
    const lens = [0]
    for (let i = 1; i < pts.length; i++) lens.push(lens[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
    const d = 'M' + pts.map((p) => p.map((n) => n.toFixed(1)).join(' ')).join(' L')
    const area = `${d} L${pts.at(-1)[0]} 250 L${pts[0][0]} 250 Z`
    const candles = Array.from({ length: 22 }, (_, i) => {
      const x = 22 + i * 16.5
      const h = 10 + ((i * 37) % 23)
      return { x, y: 236 - h - ((i * 13) % 9), h, up: (i * 7) % 5 !== 0 }
    })
    return { pts, idx, d, area, lens, total: lens.at(-1), candles }
  }, [])

  const [active, setActive] = useState(prefersReducedMotion() ? MILESTONES.length - 1 : 0)
  const lineRef = useRef(null)
  const tokenRef = useRef(null)
  const clipRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current, token = tokenRef.current, clip = clipRef.current
    line.style.strokeDasharray = total
    const place = (t) => {
      const L = total * t
      let i = 1
      while (i < lens.length - 1 && lens[i] < L) i++
      const f = (L - lens[i - 1]) / (lens[i] - lens[i - 1] || 1)
      const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f
      const y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f
      line.style.strokeDashoffset = total * (1 - t)
      token.setAttribute('transform', `translate(${x} ${y})`)
      clip.setAttribute('width', x)
      let a = 0
      idx.forEach((pi, k) => { if (lens[pi] <= L + 0.5) a = k })
      setActive((prev) => (prev === a ? prev : a))
    }

    if (prefersReducedMotion()) { place(1); return }
    let raf, t0 = performance.now()
    const loop = (now) => {
      const el = now - t0
      if (el > DRAW_MS + HOLD_MS) t0 = now
      const p = Math.max(0, Math.min(1, (now - t0) / DRAW_MS))
      // Each leg eases in/out between consecutive milestones, so the token rests on them.
      const legs = idx.length - 1
      const leg = Math.min(legs - 1, Math.floor(p * legs))
      const f = p * legs - leg
      const e = f < 0.5 ? 4 * f ** 3 : 1 - (-2 * f + 2) ** 3 / 2
      const a = lens[idx[leg]] / total, b = lens[idx[leg + 1]] / total
      place(a + (b - a) * e)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [pts, idx, lens, total])

  const m = MILESTONES[active]

  return (
    <div className="career glass" aria-label="Career timeline: LSE 2015–2016, KPMG India 2017–2022, Revolut 2022–2023, Lido Finance 2023–present">
      <div className="career-head">
        <div><b>Career timeline</b><small>2015 – present</small></div>
        <span className="now"><span className="dot" /> Now at Lido Finance</span>
      </div>

      <svg viewBox="0 0 400 250" className="career-svg" aria-hidden="true">
        <defs>
          <linearGradient id="cLine" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" /><stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="cArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#818cf8" stopOpacity=".28" /><stop offset="1" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="cTok" cx=".35" cy=".3">
            <stop offset="0" stopColor="#fdf3d0" /><stop offset=".5" stopColor="#e6b84a" /><stop offset="1" stopColor="#9a6a12" />
          </radialGradient>
          <clipPath id="cClip"><rect ref={clipRef} x="0" y="0" width="0" height="250" /></clipPath>
        </defs>

        {[50, 100, 150, 200].map((y) => <line key={y} x1="0" x2="400" y1={y} y2={y} className="grid" />)}
        {candles.map((c, i) => (
          <g key={i} className={`candle ${c.up ? 'up' : 'dn'}`}>
            <line x1={c.x} x2={c.x} y1={c.y - 5} y2={c.y + c.h + 4} />
            <rect x={c.x - 3.5} y={c.y} width="7" height={c.h} rx="1" />
          </g>
        ))}

        <path d={area} fill="url(#cArea)" clipPath="url(#cClip)" />
        <path ref={lineRef} d={d} className="cline" />

        {MILESTONES.map((ms, i) => (
          <g key={ms.co} className={`ms ${i <= active ? 'on' : ''} ${i === active ? 'cur' : ''}`} transform={`translate(${ms.x} ${ms.y})`}>
            <circle r="13" className="halo" />
            <circle r="6" className="core" />
            <text y={i === 0 ? 26 : -18} textAnchor={i === MILESTONES.length - 1 ? 'end' : 'middle'} dx={i === MILESTONES.length - 1 ? 8 : 0}>
              {ms.co}
            </text>
          </g>
        ))}

        <g ref={tokenRef} className="tok">
          <circle r="15" fill="url(#cTok)" />
          <circle r="15" fill="none" stroke="#fff" strokeOpacity=".5" />
          <text y="4.5" textAnchor="middle">SM</text>
        </g>
      </svg>

      <div className="career-card" key={active}>
        <div className="cc-top"><b>{m.name}</b><span>{m.yr}</span></div>
        <div className="cc-role">{m.role}</div>
      </div>

    </div>
  )
}
