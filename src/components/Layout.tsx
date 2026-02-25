import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function Layout() {
  const location = useLocation();
  const hideNavPaths = ['/', '/login', '/order/'];
  const shouldHideNav = hideNavPaths.some(path => location.pathname.startsWith(path) && location.pathname !== '/orders');

  return (
    <div className="min-h-screen bg-background-light pb-24 relative">
      <Outlet />
      {!shouldHideNav && <BottomNav />}
    </div>
  );
}
