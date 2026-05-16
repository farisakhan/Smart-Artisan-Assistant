import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

import ArtisanDashboard from "../pages/artisan/ArtisanDashboard";
import AddEntryPage from "../pages/artisan/AddEntryPage";
import EntriesPage from "../pages/artisan/EntriesPage";
import ReportsPage from "../pages/artisan/ReportsPage";
import ProductGallery from "../pages/artisan/ProductGallery";
import ArtisanProfile from "../pages/artisan/ArtisanProfile";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import AdminReports from "../pages/admin/AdminReports";
import AdminProfile from "../pages/admin/AdminProfile";
import HistoryPage from "../pages/artisan/HistoryPage";

function PrivateRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* ARTISAN */}
        <Route
          path="/artisan/dashboard"
          element={
            <PrivateRoute role="artisan">
              <ArtisanDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/artisan/add-entry"
          element={
            <PrivateRoute role="artisan">
              <AddEntryPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/artisan/entries"
          element={
            <PrivateRoute role="artisan">
              <EntriesPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/artisan/reports"
          element={
            <PrivateRoute role="artisan">
              <ReportsPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/artisan/gallery"
          element={
            <PrivateRoute role="artisan">
              <ProductGallery />
            </PrivateRoute>
          }
        />

        <Route
          path="/artisan/profile"
          element={
            <PrivateRoute role="artisan">
              <ArtisanProfile />
            </PrivateRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <PrivateRoute role="admin">
              <ManageUsers />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/reports"
          element={
            <PrivateRoute role="admin">
              <AdminReports />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <PrivateRoute role="admin">
              <AdminProfile />
            </PrivateRoute>
          }
        />

        <Route
  path="/artisan/history"
  element={
    <PrivateRoute role="artisan">
      <HistoryPage />
    </PrivateRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;