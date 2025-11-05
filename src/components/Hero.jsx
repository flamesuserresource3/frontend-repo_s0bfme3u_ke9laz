import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Coming Soon Ribbon */}
      <div className="absolute right-0 top-8 z-20 rotate-45 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-1 shadow-lg rounded-l pointer-events-none">
        Coming Soon
      </div>

      <div className="relative h-[560px] md:h-[720px] rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 via-[#0a0a14] to-black shadow-2xl">
        {/* Spline Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(76,29,149,0.35),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_60%,rgba(37,99,235,0.18),transparent)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              AI Voice Agent • Multilingual • 24/7
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-violet-300 to-fuchsia-300">
              Let AI Handle Your Business Calls
            </h1>
            <p className="mt-5 text-base md:text-lg text-slate-300">
              Meet Staru — your 24/7 multilingual AI Voice Agent for smarter customer conversations.
              Natural, human-like calls that capture leads and update your CRM automatically.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-sky-600 px-7 py-3 text-white shadow-lg shadow-violet-900/30 hover:from-violet-500 hover:to-sky-500 transition"
              >
                Join Waitlist
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-slate-200 hover:bg-white/10 backdrop-blur transition"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
