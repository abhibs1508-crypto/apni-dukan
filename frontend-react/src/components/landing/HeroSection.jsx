import { motion } from 'framer-motion';

export const HeroSection = () => (
  <section className='grid gap-6 lg:grid-cols-[1.6fr,1fr]'>
    <div className='glass rounded-3xl p-6'>
      <p className='text-xs uppercase tracking-[0.2em] text-cyan-300'>Digital Operating System for Box Cricket</p>
      <h2 className='mt-3 text-3xl font-black md:text-5xl'>Realtime Match, Booking & Tournament Command Center</h2>
      <div className='mt-6 grid gap-4 md:grid-cols-3'>
        {['Live Matches 24', 'Bookings Today 312', 'Avg Uptime 99.98%'].map((x) => <div key={x} className='metric-card text-sm'>{x}</div>)}
      </div>
      <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{repeat:Infinity,duration:1.5,repeatType:'reverse'}} className='mt-6 rounded-xl bg-emerald-500/15 p-4 text-emerald-200'>LIVE TICKER: Strikers XI 128/3 (14.2)</motion.div>
    </div>
    <div className='glass rounded-3xl p-6'>
      <h3 className='font-semibold'>Ongoing Match Preview</h3>
      <div className='mt-4 space-y-3 text-sm text-slate-200'>
        <p>Strikers XI vs Royal Smashers</p><p>Need 42 off 34 • Win Prob 64%</p>
        <button className='w-full rounded-lg bg-emerald-400 px-4 py-3 font-semibold text-slate-950'>Open Live Match Center</button>
      </div>
    </div>
  </section>
);
