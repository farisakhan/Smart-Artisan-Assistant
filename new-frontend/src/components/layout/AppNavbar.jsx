import {
  Avatar,
  Burger,
  Group,
  Indicator,
  Menu,
  Text,
  ActionIcon,
} from "@mantine/core";

import {
  IconBell,
  IconUser,
  IconLogout,
} from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

function AppNavbar({ opened, toggle }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const goProfile = () => {
    if (user.role === "artisan") {
      navigate("/artisan/profile");
    } else {
      navigate("/admin/profile");
    }
  };

  return (
    <div
      style={{
        height: 70,
        background: "white",
        borderBottom: "1px solid #eee",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Group>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
        />

        <Text fw={700} size="lg">
          Artisan Hub
        </Text>
      </Group>

      <Group>
        {/* Notifications */}
        <Menu shadow="md" width={250}>
          <Menu.Target>
            <Indicator color="red" size={8}>
              <ActionIcon variant="light" size="lg">
                <IconBell size={18} />
              </ActionIcon>
            </Indicator>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Notifications</Menu.Label>

            <Menu.Item>
              New product entry added
            </Menu.Item>

            <Menu.Item>
              Weekly report generated
            </Menu.Item>

            <Menu.Item>
              Earnings updated
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* Profile */}
        <Menu shadow="md" width={220}>
          <Menu.Target>
            <Group style={{ cursor: "pointer" }}>
              <Avatar radius="xl" />

              <div>
                <Text fw={600}>
                  {user?.name}
                </Text>

                <Text size="xs" c="dimmed">
                  {user?.role}
                </Text>
              </div>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconUser size={16} />}
              onClick={goProfile}
            >
              Profile
            </Menu.Item>

            <Menu.Item
              color="red"
              leftSection={<IconLogout size={16} />}
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