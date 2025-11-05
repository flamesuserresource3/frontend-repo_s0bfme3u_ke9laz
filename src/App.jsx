import Hero from './components/Hero'
import FeatureSections from './components/FeatureSections'
import Industries from './components/Industries'
import CTAFooter from './components/CTAFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-slate-200">
      {/* Global background aurora */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(79,70,229,0.15),transparent)]" />
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.12),transparent)]" />

      <header className="mx-auto w-full max-w-6xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-sky-500" />
            <span className="text-white font-semibold tracking-wide">Staru</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#cta" className="hover:text-white">Get Access</a>
          </div>
          <a href="#cta" className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">Join Waitlist</a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-8 space-y-16 md:space-y-24">
        <Hero />
        <section id="features" className="scroll-mt-24">
          <FeatureSections />
        </section>
        <section id="industries" className="scroll-mt-24">
          <Industries />
        </section>
        <CTAFooter />
      </main>
    </div>
  )
}

export default App
