import {
  AppShell,
} from "@mantine/core";

import { useState } from "react";

import AppNavbar from "./AppNavbar";
import AppSidebar from "./AppSidebar";

function AppLayout({ children }) {
  const [opened, setOpened] =
    useState(true);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: opened ? 260 : 0,
        breakpoint: "sm",
      }}
    >
      {/* SIDEBAR */}
      {opened && (
        <AppShell.Navbar
          p={0}
          style={{
            border: "none",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <AppSidebar />
        </AppShell.Navbar>
      )}

      {/* MAIN */}
      <AppShell.Main
        style={{
          minHeight: "100vh",
          background: "#f3f4f6",
        }}
      >
        <AppNavbar
          opened={opened}
          setOpened={setOpened}
        />

        <div
          style={{
            marginTop: 20,
          }}
        >
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;