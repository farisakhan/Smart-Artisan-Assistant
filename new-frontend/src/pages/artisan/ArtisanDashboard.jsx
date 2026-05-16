import { Grid, Card, Title, Text } from "@mantine/core";

import AppLayout from "../../components/layout/AppLayout";
import StatsCard from "../../components/ui/StatsCard";
import EarningsChart from "../../components/charts/EarningsChart";

function ArtisanDashboard() {
  return (
    <AppLayout>
      <Title order={2} mb={20}>
        Artisan Dashboard
      </Title>

      <Grid mb={20}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatsCard title="Today's Earnings" value="₹12,500" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatsCard title="Today's Profit" value="₹5,800" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <StatsCard title="Products Sold" value="38" />
        </Grid.Col>
      </Grid>

      <Card shadow="sm" radius="md" mb={20}>
        <Title order={4} mb={20}>
          Earnings Overview
        </Title>

        <EarningsChart />
      </Card>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md">
            <Title order={4}>Most Sold Product</Title>
            <Text mt={10}>Handmade Pottery - 52 Sales</Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" radius="md">
            <Title order={4}>Most Profitable Product</Title>
            <Text mt={10}>Wood Craft Set - ₹24,000 Profit</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </AppLayout>
  );
}

export default ArtisanDashboard;