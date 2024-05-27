import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import useUser from './features/auth/hooks/useUser';
import PlacePage from './pages/ListingPage';

import HostListingsPage from './pages/dashboard/HostListingsPage';

import EditListingLayout from './pages/dashboard/EditListingLayout';
import EditListingTitle from './features/listings/dashboard/components/EditListingTitle';
import EditListingSummary from './features/listings/dashboard/components/EditListingSummary';
import EditListingStatus from './features/listings/dashboard/components/EditListingStatus';
import EditListingAmenities from './features/listings/dashboard/components/EditListingAmenities';
import EditListingCategory from './features/listings/dashboard/components/EditListingCategory';
import EditListingType from './features/listings/dashboard/components/EditListingType';
import EditListingLocation from './features/listings/dashboard/components/EditListingLocation';
import EditListingImages from './features/listings/dashboard/components/EditListingImages';
import EditListingPlan from './features/listings/dashboard/components/EditListingPlan';

import BookingPage from './pages/BookingPage';
import HostTodayPage from './pages/dashboard/HostTodayPage';
import ProtectRoute from './components/ProtectRoute';

import HostingBookingsPage from './pages/dashboard/HostBookingsPage';
import HostJoinPage from './pages/HostJoinPage';
import TripsPage from './pages/TripsPage';
import DashboardLayout from './pages/dashboard/DashboardLayout';

function App() {
  useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/listings/:listingId',
      element: <PlacePage />,
    },
    { path: '/book/:listingId', element: <BookingPage /> },
    { path: 'host/homes', element: <HostJoinPage /> },
    { path: 'trips', element: <TripsPage /> },
    {
      path: '/hosting',
      element: (
        <ProtectRoute>
          <DashboardLayout />
        </ProtectRoute>
      ),
      children: [
        { path: 'today', element: <HostTodayPage />, index: true },
        { path: 'bookings', element: <HostingBookingsPage /> },
        { path: 'listings', element: <HostListingsPage /> },

        {
          path: 'listings/editor/:listingId',
          element: <EditListingLayout />,

          children: [
            { index: true, element: <EditListingStatus /> },
            { path: 'title', element: <EditListingTitle /> },
            { path: 'summary', element: <EditListingSummary /> },
            { path: 'amenities', element: <EditListingAmenities /> },
            { path: 'type', element: <EditListingType /> },
            { path: 'category', element: <EditListingCategory /> },
            { path: 'location', element: <EditListingLocation /> },
            { path: 'Plan', element: <EditListingPlan /> },
            { path: 'photos', element: <EditListingImages /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
