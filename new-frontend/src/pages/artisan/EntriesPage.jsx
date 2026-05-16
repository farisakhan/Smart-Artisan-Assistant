import {
  Button,
  Card,
  Group,
  Table,
  TextInput,
  Title,
  Badge,
  Modal,
  Select,
} from "@mantine/core";

import {
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";

import { useEffect, useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

function EntriesPage() {
  const [entries, setEntries] = useState([]);

  const [search, setSearch] =
    useState("");

  const [opened, setOpened] =
    useState(false);

  const [selectedEntry, setSelectedEntry] =
    useState(null);

  useEffect(() => {
    const savedEntries =
      JSON.parse(
        localStorage.getItem("entries")
      ) || [];

    setEntries(savedEntries);
  }, []);

  const deleteEntry = (id) => {
    const updated = entries.filter(
      (item) => item.id !== id
    );

    setEntries(updated);

    localStorage.setItem(
      "entries",
      JSON.stringify(updated)
    );
  };

  const openEdit = (entry) => {
    setSelectedEntry(entry);

    setOpened(true);
  };

  const updateStatus = (value) => {
    const updated = entries.map((item) =>
      item.id === selectedEntry.id
        ? {
            ...item,
            status: value,
          }
        : item
    );

    setEntries(updated);

    localStorage.setItem(
      "entries",
      JSON.stringify(updated)
    );

    setOpened(false);
  };

  const filteredEntries = entries.filter(
    (item) =>
      item.product
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <Card shadow="sm" radius="lg">
        <Group
          justify="space-between"
          mb={25}
        >
          <Title order={3}>
            Entries
          </Title>

          <TextInput
            placeholder="Search product..."
            leftSection={
              <IconSearch size={16} />
            }
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </Group>

        <Table
          striped
          highlightOnHover
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Product
              </Table.Th>

              <Table.Th>
                Quantity
              </Table.Th>

              <Table.Th>
                Profit
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
            {filteredEntries.map(
              (item) => (
                <Table.Tr
                  key={item.id}
                >
                  <Table.Td>
                    {item.product}
                  </Table.Td>

                  <Table.Td>
                    {item.quantity}
                  </Table.Td>

                  <Table.Td>
                    ₹{item.profit}
                  </Table.Td>

                  <Table.Td>
                    <Badge
  color={
    item.status === "Preparing"
      ? "red"
      : item.status === "Ready"
      ? "orange"
      : "green"
  }
>
  {item.status}
</Badge>
                  </Table.Td>

                  <Table.Td>
                    <Group>
                      <Button
                        size="xs"
                        onClick={() =>
                          openEdit(item)
                        }
                      >
                        Edit
                      </Button>

                      <Button
                        color="red"
                        size="xs"
                        leftSection={
                          <IconTrash size={14} />
                        }
                        onClick={() =>
                          deleteEntry(
                            item.id
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

      {/* MODAL INSIDE COMPONENT */}
      <Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="Edit Entry"
  centered
>
  <TextInput
    label="Product"
    value={
      selectedEntry?.product || ""
    }
    onChange={(e) =>
      setSelectedEntry({
        ...selectedEntry,
        product: e.target.value,
      })
    }
    mb={15}
  />

  <TextInput
    label="Quantity"
    value={
      selectedEntry?.quantity || ""
    }
    onChange={(e) =>
      setSelectedEntry({
        ...selectedEntry,
        quantity: e.target.value,
      })
    }
    mb={15}
  />

  <TextInput
    label="Profit"
    value={
      selectedEntry?.profit || ""
    }
    onChange={(e) =>
      setSelectedEntry({
        ...selectedEntry,
        profit: e.target.value,
      })
    }
    mb={15}
  />

  <Select
    label="Status"
    data={[
      "Preparing",
      "Ready",
      "Delivered",
    ]}
    value={
      selectedEntry?.status || ""
    }
    onChange={(value) =>
      setSelectedEntry({
        ...selectedEntry,
        status: value,
      })
    }
    mb={20}
  />

  <Button
    fullWidth
    onClick={() => {
      const updated = entries.map(
        (item) =>
          item.id === selectedEntry.id
            ? selectedEntry
            : item
      );

      setEntries(updated);

      localStorage.setItem(
        "entries",
        JSON.stringify(updated)
      );

      setOpened(false);
    }}
  >
    Save Changes
  </Button>
</Modal>
    </AppLayout>
  );
}

export default EntriesPage;