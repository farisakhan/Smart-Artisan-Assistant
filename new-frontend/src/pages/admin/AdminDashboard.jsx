import {
  Card,
  Grid,
  Group,
  Text,
  Title,
  Button,
  Badge,
  Table,
} from "@mantine/core";

import {
  IconUsers,
  IconCurrencyRupee,
  IconPackage,
  IconTruckDelivery,
} from "@tabler/icons-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import AppLayout from "../../components/layout/AppLayout";

function AdminDashboard() {
  const entries =
    JSON.parse(localStorage.getItem("entries")) ||
    [];

  // ANALYTICS
  const totalProducts =
    entries.length;

  const totalRevenue = entries.reduce(
    (acc, item) =>
      acc +
      item.sellingPrice *
        item.quantity,
    0
  );

  const totalProfit = entries.reduce(
    (acc, item) =>
      acc + item.profit,
    0
  );

  const deliveredOrders =
    entries.filter(
      (item) =>
        item.status === "Delivered"
    ).length;

  const chartData = [
    {
      name: "Revenue",
      value: totalRevenue,
    },
    {
      name: "Profit",
      value: totalProfit,
    },
    {
      name: "Delivered",
      value: deliveredOrders,
    },
  ];

  return (
    <AppLayout>
      <Title order={2} mb={25}>
        Admin Dashboard
      </Title>

      {/* STATS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Group>
              <IconPackage
                size={40}
                color="#3b82f6"
              />

              <div>
                <Text size="sm">
                  Products
                </Text>

                <Title order={3}>
                  {totalProducts}
                </Title>
              </div>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Group>
              <IconCurrencyRupee
                size={40}
                color="#16a34a"
              />

              <div>
                <Text size="sm">
                  Revenue
                </Text>

                <Title order={3}>
                  ₹{totalRevenue}
                </Title>
              </div>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Group>
              <IconTruckDelivery
                size={40}
                color="#f59e0b"
              />

              <div>
                <Text size="sm">
                  Delivered
                </Text>

                <Title order={3}>
                  {deliveredOrders}
                </Title>
              </div>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Group>
              <IconUsers
                size={40}
                color="#8b5cf6"
              />

              <div>
                <Text size="sm">
                  Artisans
                </Text>

                <Title order={3}>
                  12
                </Title>
              </div>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      {/* CHART + QUICK ACTIONS */}
      <Grid mb={25}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
          >
            <Title
              order={4}
              mb={20}
            >
              Platform Analytics
            </Title>

            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart
                data={chartData}
              >
                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#3b82f6"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            shadow="sm"
            radius="lg"
            p="lg"
            h="100%"
          >
            <Title
              order={4}
              mb={20}
            >
              Quick Actions
            </Title>

            <Button
              fullWidth
              mb={10}
            >
              Export Reports
            </Button>

            <Button
              fullWidth
              mb={10}
              color="orange"
            >
              View Analytics
            </Button>

            <Button
              fullWidth
              mb={10}
              color="green"
            >
              Add Artisan
            </Button>

            <Button
              fullWidth
              color="red"
            >
              Generate Report
            </Button>
          </Card>
        </Grid.Col>
      </Grid>

      {/* RECENT ACTIVITY */}
      <Card
        shadow="sm"
        radius="lg"
      >
        <Group
          justify="space-between"
          mb={20}
        >
          <Title order={4}>
            Recent Activity
          </Title>

          <Badge color="blue">
            Live Updates
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

export default AdminDashboard;