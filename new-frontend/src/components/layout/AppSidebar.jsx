import { NavLink } from "react-router-dom";

import {
  IconDashboard,
  IconPlus,
  IconTable,
  IconReportAnalytics,
  IconPhoto,
  IconUsers,
} from "@tabler/icons-react";

function AppSidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const artisanLinks = [
    {
      label: "Dashboard",
      path: "/artisan/dashboard",
      icon: <IconDashboard size={18} />,
    },
    {
      label: "Add Entry",
      path: "/artisan/add-entry",
      icon: <IconPlus size={18} />,
    },
    {
      label: "Entries",
      path: "/artisan/entries",
      icon: <IconTable size={18} />,
    },
    {
      label: "Reports",
      path: "/artisan/reports",
      icon: <IconReportAnalytics size={18} />,
    },
    {
      label: "Gallery",
      path: "/artisan/gallery",
      icon: <IconPhoto size={18} />,
    },
    {
  label: "History",
  path: "/artisan/history",
  icon: <IconTable size={18} />,
},
  ];

  const adminLinks = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: <IconDashboard size={18} />,
    },
    {
      label: "Manage Users",
      path: "/admin/users",
      icon: <IconUsers size={18} />,
    },
    {
      label: "Reports",
      path: "/admin/reports",
      icon: <IconReportAnalytics size={18} />,
    },
  ];

  const links =
    user?.role === "artisan"
      ? artisanLinks
      : adminLinks;

  return (
    <div
      style={{
        width: 260,
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: 20,
      }}
    >
      <TextLogo />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 30,
        }}
      >
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px",
              borderRadius: "10px",
              background: "#1f2937",
              color: "white",
            }}
          >
            {item.icon}
            {item.label}
          </NavLink>

          
        ))}
      </div>
    </div>
  );
}

function TextLogo() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div>
      <h2>
        {user?.role === "admin"
          ? "Admin Hub"
          : "Artisan Hub"}
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginTop: 5,
          fontSize: 14,
        }}
      >
        {user?.role === "admin"
          ? "Administration Panel"
          : "Craft Management System"}
      </p>
    </div>
  );
}


export default AppSidebar;