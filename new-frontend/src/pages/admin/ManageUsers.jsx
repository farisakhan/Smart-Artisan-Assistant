import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Modal,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import {
  IconEdit,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";

import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

function ManageUsers() {
  const [search, setSearch] =
    useState("");

  const [opened, setOpened] =
    useState(false);

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      products: 24,
      earnings: 12000,
      status: "Active",
    },

    {
      id: 2,
      name: "Fatima Khan",
      email: "fatima@gmail.com",
      products: 18,
      earnings: 9800,
      status: "Blocked",
    },

    {
      id: 3,
      name: "Arjun Patel",
      email: "arjun@gmail.com",
      products: 31,
      earnings: 18000,
      status: "Active",
    },
  ]);

  // SEARCH
  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // DELETE
  const deleteUser = (id) => {
    const updated = users.filter(
      (user) => user.id !== id
    );

    setUsers(updated);
  };

  // BLOCK / UNBLOCK
  const toggleStatus = (id) => {
    const updated = users.map((user) =>
      user.id === id
        ? {
            ...user,
            status:
              user.status === "Active"
                ? "Blocked"
                : "Active",
          }
        : user
    );

    setUsers(updated);
  };

  // EDIT OPEN
  const openEdit = (user) => {
    setSelectedUser(user);

    setOpened(true);
  };

  // SAVE EDIT
  const saveUser = () => {
    const updated = users.map((user) =>
      user.id === selectedUser.id
        ? selectedUser
        : user
    );

    setUsers(updated);

    setOpened(false);
  };

  return (
    <AppLayout>
      <Card shadow="sm" radius="lg">
        <Group
          justify="space-between"
          mb={25}
        >
          <div>
            <Title order={3}>
              Manage Artisans
            </Title>

            <Text c="dimmed">
              Manage artisan accounts
            </Text>
          </div>

          <TextInput
            placeholder="Search artisan..."
            leftSection={
              <IconSearch size={16} />
            }
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            w={250}
          />
        </Group>

        <Table
          striped
          highlightOnHover
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Artisan
              </Table.Th>

              <Table.Th>
                Products
              </Table.Th>

              <Table.Th>
                Earnings
              </Table.Th>

              <Table.Th>
                Status
              </Table.Th>

              <Table.Th>
                Actions
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {filteredUsers.map(
              (user) => (
                <Table.Tr
                  key={user.id}
                >
                  <Table.Td>
                    <Group>
                      <Avatar
                        radius="xl"
                      >
                        {user.name[0]}
                      </Avatar>

                      <div>
                        <Text fw={600}>
                          {
                            user.name
                          }
                        </Text>

                        <Text
                          size="sm"
                          c="dimmed"
                        >
                          {
                            user.email
                          }
                        </Text>
                      </div>
                    </Group>
                  </Table.Td>

                  <Table.Td>
                    {
                      user.products
                    }
                  </Table.Td>

                  <Table.Td>
                    ₹
                    {
                      user.earnings
                    }
                  </Table.Td>

                  <Table.Td>
                    <Badge
                      color={
                        user.status ===
                        "Active"
                          ? "green"
                          : "red"
                      }
                    >
                      {
                        user.status
                      }
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    <Group>
                      {/* EDIT */}
                      <Button
                        size="xs"
                        leftSection={
                          <IconEdit size={14} />
                        }
                        onClick={() =>
                          openEdit(user)
                        }
                      >
                        Edit
                      </Button>

                      {/* BLOCK */}
                      <Button
                        size="xs"
                        color="orange"
                        onClick={() =>
                          toggleStatus(
                            user.id
                          )
                        }
                      >
                        {user.status ===
                        "Active"
                          ? "Block"
                          : "Unblock"}
                      </Button>

                      {/* DELETE */}
                      <Button
                        size="xs"
                        color="red"
                        leftSection={
                          <IconTrash size={14} />
                        }
                        onClick={() =>
                          deleteUser(
                            user.id
                          )
                        }
                      >
                        Delete
                      </Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              )
            )}
          </Table.Tbody>
        </Table>
      </Card>

      {/* EDIT MODAL */}
      <Modal
        opened={opened}
        onClose={() =>
          setOpened(false)
        }
        title="Edit Artisan"
        centered
      >
        <TextInput
          label="Name"
          value={
            selectedUser?.name || ""
          }
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              name: e.target.value,
            })
          }
          mb={15}
        />

        <TextInput
          label="Email"
          value={
            selectedUser?.email || ""
          }
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              email: e.target.value,
            })
          }
          mb={15}
        />

        <TextInput
          label="Products"
          value={
            selectedUser?.products ||
            ""
          }
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              products:
                e.target.value,
            })
          }
          mb={15}
        />

        <TextInput
          label="Earnings"
          value={
            selectedUser?.earnings ||
            ""
          }
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              earnings:
                e.target.value,
            })
          }
          mb={20}
        />

        <Button
          fullWidth
          onClick={saveUser}
        >
          Save Changes
        </Button>
      </Modal>
    </AppLayout>
  );
}

export default ManageUsers;