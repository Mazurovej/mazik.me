import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';

export function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHome && <Navbar />}
      <main className={`flex-1 ${!isHome ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}
