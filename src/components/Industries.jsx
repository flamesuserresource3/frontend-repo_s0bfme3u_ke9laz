import { motion } from 'framer-motion'

const industries = [
  'Digital Agencies',
  'Real Estate Firms',
  'Clinics & Hospitals',
  'Service Providers',
  'Local Businesses',
  'Startups'
]

export default function Industries() {
  return (
    <section className="relative">
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Industries That Benefit</h2>
        <p className="mt-2 text-slate-300">Built to help teams handle more leads with less effort.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {industries.map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 backdrop-blur hover:bg-white/10"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
