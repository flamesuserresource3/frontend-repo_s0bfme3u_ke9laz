import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export default function CTAFooter() {
  return (
    <section id="cta" className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-violet-600/20 to-sky-600/20 p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(99,102,241,0.3),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Experience the Future of Voice AI.</h2>
          <p className="mt-3 text-slate-200">Be among the first to automate your business communication with Staru.</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-7 py-3 font-medium shadow hover:opacity-90"
            >
              <Rocket className="mr-2 h-4 w-4" /> Get Early Access
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-white backdrop-blur hover:bg-white/15"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-slate-400">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500" />
          <span className="text-white font-medium">Staru</span>
        </div>
        <div className="text-center text-sm">Contact: hello@staru.ai</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-slate-200">Twitter</a>
          <a href="#" className="hover:text-slate-200">LinkedIn</a>
          <a href="#" className="hover:text-slate-200">GitHub</a>
        </div>
      </div>
      <div className="mt-2 text-center md:text-right text-xs text-slate-500">Powered by Digital Door Agency</div>
    </section>
  )
}
