import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Menu,
  Text,
} from "@mantine/core";

import {
  IconBell,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

function AppNavbar({
  opened,
  setOpened,
}) {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div
      style={{
        background: "white",
        padding: "15px 20px",
        borderRadius: 12,
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
      }}
    >
      {/* LEFT */}
      <Group>
        <Burger
          opened={opened}
          onClick={() =>
            setOpened(!opened)
          }
        />

        <div>
          <Text fw={700} size="lg">
            {user?.role === "admin"
              ? "Admin Hub"
              : "Artisan Hub"}
          </Text>

          <Text
            size="sm"
            c="dimmed"
          >
            Welcome back,
            {" "}
            {user?.name}
          </Text>
        </div>
      </Group>

      {/* RIGHT */}
      <Group>
        {/* NOTIFICATION */}
        <ActionIcon
          variant="light"
          size="lg"
          radius="xl"
        >
          <IconBell size={18} />
        </ActionIcon>

        {/* PROFILE */}
        <Menu shadow="md">
          <Menu.Target>
            <Avatar
              radius="xl"
              style={{
                cursor: "pointer",
              }}
            >
              {user?.name?.[0]}
            </Avatar>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconUser size={16} />
              }
              onClick={() =>
                navigate("/profile")
              }
            >
              Profile
            </Menu.Item>

            <Menu.Item
              color="red"
              leftSection={
                <IconLogout size={16} />
              }
              onClick={logout}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </div>
  );
}

export default AppNavbar;