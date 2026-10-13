import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks'

// Faint drifting node network (a quiet nod to blockchain) behind everything.
export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const reduce = prefersReducedMotion()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const link = 140 * dpr
    let W, H, nodes = [], raf

    const resize = () => {
      W = cv.width = window.innerWidth * dpr
      H = cv.height = window.innerHeight * dpr
      const n = Math.round(Math.min(48, window.innerWidth / 30))
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25 * dpr, vy: (Math.random() - 0.5) * 0.25 * dpr,
        c: Math.random() < 0.5 ? '56,189,248' : '129,140,248',
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx; a.y += a.vy
        if (a.x < 0 || a.x > W) a.vx *= -1
        if (a.y < 0 || a.y > H) a.vy *= -1
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < link) {
            ctx.strokeStyle = `rgba(${a.c},${(1 - d / link) * 0.12})`
            ctx.lineWidth = dpr
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        ctx.fillStyle = `rgba(${a.c},.45)`
        ctx.fillRect(a.x - 1.5 * dpr, a.y - 1.5 * dpr, 3 * dpr, 3 * dpr)
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); if (reduce) draw() }
    resize(); draw()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <>
      <canvas id="net" ref={ref} aria-hidden="true" />
      <div className="aurora" aria-hidden="true"><span /><span /></div>
    </>
  )
}
