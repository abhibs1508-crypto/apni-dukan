import { HeroSection } from '../components/landing/HeroSection';

export const LandingPage = () => <div className='space-y-4'><HeroSection /><section className='grid gap-4 md:grid-cols-3'>{['Turf Availability','Live Match Cards','Upcoming Tournaments'].map((x)=><div key={x} className='metric-card h-40'>{x}</div>)}</section></div>;
