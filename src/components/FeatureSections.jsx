import { motion } from 'framer-motion'
import { Mic, Globe, Settings, Brain, BarChart3, MessageCircle, Clock } from 'lucide-react'

const features = [
  { icon: Mic, title: 'Human-Like AI Voice Interaction', desc: 'Natural, friendly conversations that feel truly human.' },
  { icon: Globe, title: 'Multilingual (36+ Languages)', desc: 'Serve customers anywhere with seamless language switching.' },
  { icon: Settings, title: 'CRM Integration', desc: 'Auto-sync summaries and lead details to your tools.' },
  { icon: Brain, title: 'Smart Conversation Flow', desc: 'Understands context, remembers details, and adapts.' },
  { icon: BarChart3, title: 'Real-Time Dashboard', desc: 'Track calls, outcomes, and performance in one place.' },
  { icon: MessageCircle, title: 'Custom Tone & Scripts', desc: 'Tune the voice, mood, and flows to match your brand.' },
  { icon: Clock, title: '24/7 Availability', desc: 'Never miss an opportunity — always on, always ready.' },
]

const howSteps = [
  {
    step: '01',
    title: 'AI answers or dials calls',
    desc: 'Inbound or outbound — Staru picks up instantly or reaches out automatically.'
  },
  {
    step: '02',
    title: 'Converses & collects details',
    desc: 'Captures name, business info, needs, and preferences with natural flow.'
  },
  {
    step: '03',
    title: 'Saves to CRM / Dashboard',
    desc: 'Summaries and key fields are synced to your systems in real time.'
  }
]

export default function FeatureSections() {
  return (
    <section className="relative">
      {/* How It Works */}
      <div className="grid gap-6 md:grid-cols-3">
        {howSteps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-violet-600/20 to-sky-400/20 blur-2xl" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-slate-300">Step {s.step}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_4px_rgba(16,185,129,0.5)]" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-slate-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Features */}
      <div className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Core Features</h2>
          <span className="text-xs text-slate-400">Designed for scale</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-lg"
            >
              <div className="absolute -top-12 -left-12 h-36 w-36 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-sky-400/20 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-sky-300">
                  {f.icon && <f.icon className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-slate-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-2xl border border-white/10 bg-[#0b0f1a]/80 p-4 backdrop-blur-xl"
      >
        <div className="rounded-xl bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">Call Dashboard Preview</h3>
            <span className="text-xs text-slate-400">Realtime summaries & logs</span>
          </div>
          {/* Mock dashboard rows */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-4">
              <p className="text-xs text-slate-400">Live Transcript</p>
              <div className="mt-2 h-28 rounded bg-black/40 p-3 text-slate-300">
                "Hi Sarah, this is Staru following up about your website redesign. What timeline are you considering?"
              </div>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <p className="text-xs text-slate-400">Call Summary</p>
              <ul className="mt-2 text-slate-300 text-sm list-disc list-inside space-y-1">
                <li>Lead: Sarah (Digital Agency)</li>
                <li>Need: Website redesign + SEO</li>
                <li>Priority: High • Callback Tuesday 3PM</li>
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 p-4 md:col-span-2">
              <p className="text-xs text-slate-400">Recent Calls</p>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                {['Closed - Qualified','Voicemail Left','Booked Meeting'].map((t, i) => (
                  <div key={i} className="rounded-md border border-white/10 bg-white/5 p-3 text-slate-200 flex items-center justify-between">
                    <span>+1 (555) 012-{1000 + i}</span>
                    <span className="text-xs text-slate-400">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
