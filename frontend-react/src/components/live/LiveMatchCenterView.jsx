import { BarChart, Bar, XAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useMatchStore } from '../../store/useMatchStore';

const manhattan = [{o:'1',r:8},{o:'2',r:12},{o:'3',r:6},{o:'4',r:14},{o:'5',r:9}];
const worm = [{o:'1',a:8,b:5},{o:'2',a:20,b:11},{o:'3',a:26,b:19},{o:'4',a:40,b:28}];

export const LiveMatchCenterView = () => {
  const { liveHeader, commentary, timeline } = useMatchStore();
  return <section className='space-y-4'>
    <div className='glass rounded-2xl p-4'><h2 className='text-2xl font-bold'>{liveHeader.teams[0]} {liveHeader.score} ({liveHeader.overs})</h2><p className='text-sm text-cyan-300'>RRR {liveHeader.rrr} • Win Probability {liveHeader.winProb}%</p></div>
    <div className='grid gap-4 lg:grid-cols-3'>
      <div className='glass rounded-2xl p-4 lg:col-span-2'><h3>Ball by Ball</h3><div className='mt-3 flex gap-2'>{timeline.map((t,i)=><span key={i} className='rounded-full bg-slate-800 px-3 py-2 text-xs'>{t}</span>)}</div><div className='mt-4 h-52'><ResponsiveContainer><BarChart data={manhattan}><XAxis dataKey='o'/><Bar dataKey='r' fill='#22c55e'/></BarChart></ResponsiveContainer></div></div>
      <div className='glass rounded-2xl p-4'><h3>Commentary</h3><ul className='mt-2 space-y-2 text-sm'>{commentary.map((c,i)=><li key={i} className='border-b border-white/5 pb-2'>{c}</li>)}</ul></div>
    </div>
    <div className='grid gap-4 md:grid-cols-3'>
      <div className='metric-card h-44'>Partnership Stats</div><div className='metric-card h-44'>Wagon Wheel Placeholder</div>
      <div className='glass rounded-2xl p-4'><h3>Worm Graph</h3><div className='h-32'><ResponsiveContainer><LineChart data={worm}><XAxis dataKey='o'/><Line dataKey='a' stroke='#38bdf8'/><Line dataKey='b' stroke='#22c55e'/></LineChart></ResponsiveContainer></div></div>
    </div>
  </section>
}
