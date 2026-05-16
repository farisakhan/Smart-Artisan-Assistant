import {
  Badge,
  Card,
  Grid,
  Group,
  Table,
  Text,
  Title,
  Progress,
} from "@mantine/core";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import AppLayout from "../../components/layout/AppLayout";

function AdminReports() {
  const entries =
    JSON.parse(localStorage.getItem("entries")) ||
    [];

  // ANALYTICS
  const totalRevenue = entries.reduce(
    (acc, item) =>
      acc +
      Number(item.sellingPrice || 0) *
        Number(item.quantity || 0),
    0
  );

  const totalProfit = entries.reduce(
    (acc, item) =>
      acc + Number(item.profit || 0),
    0
  );

  const delivered = entries.filter(
    (item) =>
      item.status === "Delivered"
  ).length;

  const preparing = entries.filter(
    (item) =>
      item.status === "Preparing"
  ).length;

  const ready = entries.filter(
    (item) =>
      item.status === "Ready"
  ).length;

  // REVENUE CHART
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
      revenue: totalRevenue,
    },
  ];

  // STATUS CHART
  const statusData = [
    {
      name: "Preparing",
      value: preparing,
    },
    {
      name: "Ready",
      value: ready,
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
      <Group
        justify="space-between"
        mb={25}
      >
        <div>
          <Title order={2}>
            Admin Reports
          </Title>

          <Text c="dimmed">
            Platform-wide analytics and
            artisan performance
          </Text>
        </div>

        <Badge
          size="lg"
          color="green"
        >
          Live Analytics
        </Badge>
      </Group>

      {/* TOP STATS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card shadow="sm" radius="lg">
            <Text size="sm">
              Platform Revenue
            </Text>

            <Title order={2}>
              ₹{totalRevenue}
            </Title>

            <Progress
              value={75}
              mt={15}
            />
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

            <Progress
              value={60}
              color="green"
              mt={15}
            />
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

            <Progress
              value={90}
              color="orange"
              mt={15}
            />
          </Card>
        </Grid.Col>
      </Grid>

      {/* CHARTS */}
      <Grid mb={25}>
        {/* AREA CHART */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Card shadow="sm" radius="lg">
            <Title
              order={4}
              mb={20}
            >
              Revenue Growth
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <AreaChart
                data={revenueData}
              >
                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* PIE CHART */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card shadow="sm" radius="lg">
            <Title
              order={4}
              mb={20}
            >
              Order Distribution
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

      {/* PRODUCT PERFORMANCE */}
      <Grid mb={25}>
        <Grid.Col span={12}>
          <Card shadow="sm" radius="lg">
            <Title
              order={4}
              mb={20}
            >
              Product Performance
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart
                data={entries}
              >
                <XAxis dataKey="product" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="profit"
                  fill="#6366f1"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>

      {/* REPORT TABLE */}
      <Card shadow="sm" radius="lg">
        <Group
          justify="space-between"
          mb={20}
        >
          <Title order={4}>
            Platform Product Insights
          </Title>

          <Badge color="blue">
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
                Profit
              </Table.Th>

              <Table.Th>
                Status
              </Table.Th>

              <Table.Th>
                Performance
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
                  <Progress
                    value={
                      Math.min(
                        item.profit / 50,
                        100
                      )
                    }
                  />
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