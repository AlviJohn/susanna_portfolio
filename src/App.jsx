import { useEffect, useRef, useState } from 'react'
import Background from './components/Background'
import CareerChart from './components/CareerChart'
import { useCountUp, useReveal } from './hooks'
import {
  profile, stats, experience, skills, fincrime, languages,
  certifications, awards, education,
} from './data'

function Reveal({ as = 'div', className = '', children, ...rest }) {
  const Tag = as
  const [ref, visible] = useReveal()
  return <Tag ref={ref} className={`rv ${visible ? 'in' : ''} ${className}`} {...rest}>{children}</Tag>
}

function SectionHead({ label, children }) {
  return (
    <>
      <Reveal as="p" className="label">{label}</Reveal>
      <Reveal as="h2">{children}</Reveal>
    </>
  )
}

function Nav() {
  return (
    <nav>
      <a className="logo" href="#top"><i>SM</i> Susanna Mamen</a>
      <div className="navlinks">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#credentials">Credentials</a>
      </div>
      <a className="btn sm" href="#contact">Contact</a>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="chip"><span className="dot" /> {profile.current}</span>
          <h1>{profile.firstName}<small>{profile.lastName}</small></h1>
          <p className="headline">{profile.headline}</p>
          <p className="loc">{profile.location}</p>
          <p className="alum">MSc Management &amp; Strategy, London School of Economics</p>
          <div className="cta">
            <a className="btn" href="#experience">View experience</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <CareerChart />
      </div>
    </header>
  )
}

function Stat({ n, suffix, t }) {
  const [ref, visible] = useReveal()
  const v = useCountUp(n, visible)
  return (
    <div ref={ref} className={`card stat rv ${visible ? 'in' : ''}`}>
      <div className="n">{v}{suffix}</div>
      <div className="t">{t}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead label="About">
          From one-line problem statements to <span className="grad">metrics, strategy and roadmaps.</span>
        </SectionHead>
        <div className="about-grid">
          <Reveal className="card summary">
            <p>As an enthusiast for creating processes from 0 to 1 and scaling them to a 100, I have successfully introduced new products in the market, streamlined business functions and improved margins for my clients.</p>
            <p>I love turning one line problem statements into metrics, strategy and roadmaps. My dashboards bear witness to my success stories, my decks empower CXOs/founders and my wireframes delight developers!</p>
            <p>Looking forward to connecting with professionals in FinTech and product management :) Feel free to connect with me via email (<a href={`mailto:${profile.email}`} className="inline">{profile.email}</a>) or message me on LinkedIn!</p>
          </Reveal>
          <Reveal className="card facts">
            <h3>At a glance</h3>
            <dl>
              <div><dt>Current</dt><dd>Operations Manager, Compliance &amp; Risk — Lido Finance</dd></div>
              <div><dt>Focus</dt><dd>FinCrime, compliance &amp; risk operations</dd></div>
              <div><dt>Previously</dt><dd>Revolut · KPMG India</dd></div>
              <div><dt>Certified</dt><dd>CAMS (ACAMS) · Elliptic Specialist Investigator</dd></div>
              <div><dt>Education</dt><dd>MSc Management and Strategy, LSE</dd></div>
              <div><dt>Location</dt><dd>Bengaluru, India</dd></div>
              <div><dt>Languages</dt><dd>English · Malayalam · Hindi · French</dd></div>
            </dl>
          </Reveal>
        </div>
        <div className="stats">{stats.map((s) => <Stat key={s.t} {...s} />)}</div>
      </div>
    </section>
  )
}

function Role({ r }) {
  return (
    <div className="role">
      <h4>{r.title}</h4>
      <div className="when">{r.when} · {r.dur}{r.where && <> · {r.where}</>}</div>
      {r.lead && <p className="lead">{r.lead}</p>}
      {r.numbers && (
        <div className="big-num">
          {r.numbers.map(([b, s]) => <div key={s}><b>{b}</b><small>{s}</small></div>)}
        </div>
      )}
      {r.bullets && <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
      {r.tagGroups?.map(([title, tags]) => (
        <div key={title}>
          <p className="sub">{title}</p>
          <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        </div>
      ))}
    </div>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead label="Experience">Where I’ve worked.</SectionHead>
        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="article" key={job.company} className="card job">
              <span className="node" aria-hidden="true" />
              <div className="co">
                <div>
                  <h3>{job.company}</h3>
                  {job.about && <p className="co-about">{job.about}</p>}
                </div>
                <span className="tenure">{job.tenure}</span>
              </div>
              {job.roles.map((r) => <Role key={r.title} r={r} />)}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead label="Skills">Skills and expertise.</SectionHead>
        <Reveal className="card panel fincrime">
          <h3>Financial crime &amp; compliance</h3>
          <div className="fc-grid">
            {fincrime.map((f) => (
              <div className="fc" key={f.area}>
                <b>{f.area}</b>
                <span>{f.source}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="two">
          <Reveal className="card panel">
            <h3>Top skills</h3>
            <ul className="skill-list">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
          </Reveal>
          <Reveal className="card panel">
            <h3>Languages</h3>
            {languages.map(([name, level, n]) => (
              <div className="lang" key={name}>
                <div><b>{name}</b><span>{level}</span></div>
                <div className="pips" aria-label={`${level}, ${n} of 5`}>
                  {[1, 2, 3, 4, 5].map((i) => <i key={i} className={i <= n ? 'on' : ''} />)}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section id="credentials">
      <div className="wrap">
        <SectionHead label="Credentials">Certifications and honors.</SectionHead>
        <div className="certs">
          {certifications.map((c) => (
            <Reveal className="card cert" key={c.title}>
              <span className="seal" aria-hidden="true" />
              <div className="cert-body">
                <h4>{c.title}</h4>
                <p className="issuer">{c.issuer} · Issued {c.date}</p>
                {c.includes && <p className="extra">Includes: {c.includes.join(' · ')}</p>}
                {c.skills && <p className="extra">Skills: {c.skills}</p>}
                {c.id && <p className="cred-id">Credential ID {c.id}</p>}
                {c.url && <a className="cred-link" href={c.url} target="_blank" rel="noopener noreferrer">Show credential ↗</a>}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="awards">
          {awards.map(([title, meta]) => (
            <Reveal className="card award" key={title}>
              <span className="medal" aria-hidden="true">★</span>
              <div><h4>{title}</h4>{meta && <p>{meta}</p>}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <SectionHead label="Education">Education.</SectionHead>
        <div className="edu">
          {education.map((e) => (
            <Reveal className="card school" key={e.school}>
              <span className="yr">{e.yr}</span>
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <span className="crest" aria-hidden="true">{e.crest}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ toast }) {
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); toast('Email copied to clipboard') }
    catch { toast(profile.email) }
  }
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="card contact">
          <p className="label">Contact</p>
          <h2>Let’s connect.</h2>
          <p>Looking forward to connecting with professionals in FinTech and product management. Reach out by email or message on LinkedIn.</p>
          <div className="cta">
            <a className="btn" href={`mailto:${profile.email}`}>Email Susanna</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          <button className="addr" onClick={copy} title="Copy email">{profile.email} <span>Copy</span></button>
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  const [toastMsg, setToastMsg] = useState(null)
  const timer = useRef()
  const toast = (m, ms = 2200) => {
    setToastMsg(m)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToastMsg(null), ms)
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <>
      <Background />
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Credentials />
        <Contact toast={toast} />
      </main>
      <footer>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} · {profile.location}</footer>
      <div className={`toast ${toastMsg ? 'show' : ''}`} role="status">{toastMsg}</div>
    </>
  )
}
