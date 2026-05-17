import { Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell';
import { LandingPage } from '../pages/LandingPage';
import { TurfBookingPage } from '../pages/TurfBookingPage';
import { LiveMatchCenterPage } from '../pages/LiveMatchCenterPage';
import { MatchScoringPage } from '../pages/MatchScoringPage';
import { GenericDashboardPage } from '../pages/GenericDashboardPage';

export const AppRoutes = () => <Routes><Route element={<AppShell />}>
  <Route path='/' element={<LandingPage />} />
  <Route path='/turf-booking' element={<TurfBookingPage />} />
  <Route path='/live-match-center' element={<LiveMatchCenterPage />} />
  <Route path='/match-scoring' element={<MatchScoringPage />} />
  <Route path='/team/:id' element={<GenericDashboardPage title='Team Profile' modules={['Squad','Recent Form','Stats']} />} />
  <Route path='/player/:id' element={<GenericDashboardPage title='Player Statistics' modules={['Career Runs','Strike Rate','Economy','MVP Awards','Performance Chart']} />} />
  <Route path='/tournaments' element={<GenericDashboardPage title='Tournament Dashboard' modules={['Points Table','Fixtures','Knockout Bracket','Orange Cap','Purple Cap','MVP Ranking']} />} />
  <Route path='/user-dashboard' element={<GenericDashboardPage title='User Dashboard' modules={['Upcoming Bookings','My Teams','Match Alerts']} />} />
  <Route path='/operator-dashboard' element={<GenericDashboardPage title='Operator Dashboard' modules={['Live Matches','Scorer Controls','Booking Queue','Revenue Snapshot']} />} />
  <Route path='/super-admin' element={<GenericDashboardPage title='Super Admin Dashboard' modules={['System Analytics','Heatmaps','User Management','Reports','Turf Management']} />} />
  <Route path='*' element={<Navigate to='/' replace />} />
</Route></Routes>;
