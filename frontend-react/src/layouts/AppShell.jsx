import { Link, Outlet } from 'react-router-dom';
import { navItems } from '../constants/navItems';

export const AppShell = () => (
  <div className='min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_50%)]'>
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-4'>
        <h1 className='text-lg font-bold tracking-wider text-emerald-300'>SMART BOX CRICKET OS</h1>
        <nav className='hidden gap-5 md:flex'>{navItems.map((n) => <Link key={n.to} className='text-sm text-slate-300 hover:text-white' to={n.to}>{n.label}</Link>)}</nav>
      </div>
    </header>
    <main className='mx-auto max-w-7xl p-4 md:p-6'><Outlet /></main>
  </div>
);
