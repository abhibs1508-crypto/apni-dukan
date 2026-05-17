const actionButtons = ['0','1','2','3','4','6','WICKET','WIDE','NO BALL','BYE','LEG BYE','UNDO'];

export const ScoringPanel = () => (
  <section className='glass rounded-2xl p-4 md:p-6'>
    <h2 className='text-xl font-bold'>Scorer Control Panel</h2>
    <p className='text-sm text-slate-300'>Backend-owned scoring logic; UI sends scoring actions only.</p>
    <div className='mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
      {actionButtons.map((btn) => <button key={btn} className='rounded-xl border border-white/10 bg-slate-900 px-4 py-5 text-sm font-semibold hover:bg-emerald-500/20'>{btn}</button>)}
    </div>
    <div className='mt-4 grid gap-3 md:grid-cols-3'><div className='metric-card'>Over: 14.2 / 20</div><div className='metric-card'>Striker: R. Patel*</div><div className='metric-card'>Non-Striker: A. Khan</div></div>
  </section>
);
