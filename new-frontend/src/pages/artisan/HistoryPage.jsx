import {
  Badge,
  Card,
  Image,
  Table,
  Text,
  Title,
} from "@mantine/core";

import { useEffect, useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

function HistoryPage() {
  const [entries, setEntries] =
    useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem("entries")
      ) || [];

    setEntries(data);
  }, []);

  return (
    <AppLayout>
      <Card shadow="sm" radius="lg">
        <Title order={3} mb={20}>
          Entry History
        </Title>

        {entries.length === 0 ? (
          <Text c="dimmed">
            No history available
          </Text>
        ) : (
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
                  Image
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
                  Date
                </Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {entries.map((item) => (
                <Table.Tr
                  key={item.id}
                >
                  <Table.Td>
                    {item.product}
                  </Table.Td>

                  <Table.Td>
                    <Image
                      src={item.image}
                      w={60}
                      h={60}
                      radius="md"
                    />
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
                        item.status ===
                        "Preparing"
                          ? "red"
                          : item.status ===
                            "Ready"
                          ? "orange"
                          : "green"
                      }
                    >
                      {item.status}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {
                      item.createdAt
                    }
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Card>
    </AppLayout>
  );
}

export default HistoryPage;