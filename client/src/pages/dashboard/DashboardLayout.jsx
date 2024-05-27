import DashboardHeader from '../../layout/DashboardHeader';
import { Outlet } from 'react-router-dom';
export default function DashboardLayout() {
  return (
    <>
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
    </>
  );
}
