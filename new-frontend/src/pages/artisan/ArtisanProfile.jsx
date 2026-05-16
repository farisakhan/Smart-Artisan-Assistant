import {
  Avatar,
  Card,
  Grid,
  Text,
  Title,
} from "@mantine/core";

import AppLayout from "../../components/layout/AppLayout";

function ArtisanProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AppLayout>
      <Card shadow="sm" radius="lg" p="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Avatar size={140} radius="xl" />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 9 }}>
            <Title order={2}>{user?.name}</Title>

            <Text mt={10}>
              Email: {user?.email}
            </Text>

            <Text mt={10}>
              Role: Artisan
            </Text>

            <Text mt={10}>
              Products Listed: 24
            </Text>

            <Text mt={10}>
              Total Earnings: ₹84,000
            </Text>

            <Text mt={10}>
              Experience: 4 Years
            </Text>

            <Text mt={10}>
              Specialization: Handmade Crafts
            </Text>
          </Grid.Col>
        </Grid>
      </Card>
    </AppLayout>
  );
}

export default ArtisanProfile;