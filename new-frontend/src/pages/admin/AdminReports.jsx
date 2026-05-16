import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Table,
  Text,
  Title,
} from "@mantine/core";

import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import AppLayout from "../../components/layout/AppLayout";

function AdminReports() {
  const entries =
    JSON.parse(localStorage.getItem("entries")) ||
    [];

  const revenueData = [
    {
      month: "Jan",
      revenue: 4000,
    },
    {
      month: "Feb",
      revenue: 7000,
    },
    {
      month: "Mar",
      revenue: 9000,
    },
    {
      month: "Apr",
      revenue: 12000,
    },
    {
      month: "May",
      revenue: 16000,
    },
  ];

  const statusData = [
    {
      name: "Preparing",
      value: entries.filter(
        (e) =>
          e.status === "Preparing"
      ).length,
    },

    {
      name: "Ready",
      value: entries.filter(
        (e) =>
          e.status === "Ready"
      ).length,
    },

    {
      name: "Delivered",
      value: entries.filter(
        (e) =>
          e.status === "Delivered"
      ).length,
    },
  ];

  const colors = [
    "#ef4444",
    "#f59e0b",
    "#22c55e",
  ];

  return (
    <AppLayout>
      <Group
        justify="space-between"
        mb={25}
      >
        <div>
          <Title order={2}>
            Reports & Analytics
          </Title>

          <Text c="dimmed">
            Platform insights and
            analytics
          </Text>
        </div>

        <Button>
          Download Reports
        </Button>
      </Group>

      {/* CHARTS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Title
              order={4}
              mb={20}
            >
              Monthly Revenue
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <AreaChart
                data={revenueData}
              >
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Title
              order={4}
              mb={20}
            >
              Order Status
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {statusData.map(
                    (
                      entry,
                      index
                    ) => (
                      <Cell
                        key={index}
                        fill={
                          colors[
                            index
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>

      {/* REPORT TABLE */}
      <Card
        shadow="sm"
        radius="lg"
      >
        <Group
          justify="space-between"
          mb={20}
        >
          <Title order={4}>
            Product Reports
          </Title>

          <Badge color="green">
            Updated Live
          </Badge>
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
                Status
              </Table.Th>

              <Table.Th>
                Profit
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
                  {item.quantity}
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
                  ₹{item.profit}
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
      </Card>
    </AppLayout>
  );
}

export default AdminReports;