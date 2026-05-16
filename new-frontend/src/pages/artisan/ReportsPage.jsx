import {
  Badge,
  Card,
 Grid,
  Group,
  Table,
  Text,
  Title,
} from "@mantine/core";

import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

import AppLayout from "../../components/layout/AppLayout";

function ReportsPage() {
  const entries =
    JSON.parse(localStorage.getItem("entries")) ||
    [];

  const totalProfit = entries.reduce(
    (acc, item) =>
      acc + Number(item.profit),
    0
  );

  const totalProducts =
    entries.length;

  const delivered = entries.filter(
    (item) =>
      item.status === "Delivered"
  ).length;

  const chartData = [
    {
      month: "Jan",
      earnings: 2000,
    },
    {
      month: "Feb",
      earnings: 5000,
    },
    {
      month: "Mar",
      earnings: 7000,
    },
    {
      month: "Apr",
      earnings: 9000,
    },
    {
      month: "May",
      earnings: totalProfit,
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
      value: delivered,
    },
  ];

  const colors = [
    "#ef4444",
    "#f59e0b",
    "#22c55e",
  ];

  return (
    <AppLayout>
      <Title order={2} mb={25}>
        Artisan Reports
      </Title>

      {/* STATS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" radius="lg">
            <Text size="sm">
              Total Products
            </Text>

            <Title order={2}>
              {totalProducts}
            </Title>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" radius="lg">
            <Text size="sm">
              Total Profit
            </Text>

            <Title order={2}>
              ₹{totalProfit}
            </Title>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" radius="lg">
            <Text size="sm">
              Delivered Orders
            </Text>

            <Title order={2}>
              {delivered}
            </Title>
          </Card>
        </Grid.Col>
      </Grid>

      {/* CHARTS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card shadow="sm" radius="lg">
            <Title
              order={4}
              mb={20}
            >
              Earnings Overview
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <AreaChart
                data={chartData}
              >
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="earnings"
                  stroke="#2563eb"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card shadow="sm" radius="lg">
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

      {/* TABLE */}
      <Card shadow="sm" radius="lg">
        <Group
          justify="space-between"
          mb={20}
        >
          <Title order={4}>
            Recent Reports
          </Title>

          <Badge color="green">
            Live
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
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </AppLayout>
  );
}

export default ReportsPage;