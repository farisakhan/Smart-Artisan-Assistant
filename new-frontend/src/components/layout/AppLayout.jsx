import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import AppNavbar from "./AppNavbar";
import AppSidebar from "./AppSidebar";

function AppLayout({ children }) {
  const [opened, { toggle, close }] =
    useDisclosure(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Desktop Sidebar */}
      <div className="desktop-sidebar">
        <AppSidebar />
      </div>

      {/* Mobile Sidebar */}
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={260}
        hiddenFrom="md"
        padding={0}
      >
        <AppSidebar closeDrawer={close} />
      </Drawer>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "#f5f7fb",
        }}
      >
        <AppNavbar
          opened={opened}
          toggle={toggle}
        />

        <div style={{ padding: 20 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;