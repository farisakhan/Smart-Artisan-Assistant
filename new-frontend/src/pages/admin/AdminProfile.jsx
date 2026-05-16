import {
  Avatar,
  Card,
  Grid,
  Text,
  Title,
} from "@mantine/core";

import AppLayout from "../../components/layout/AppLayout";

function AdminProfile() {
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
              Role: Administrator
            </Text>

            <Text mt={10}>
              Total Artisans Managed: 120
            </Text>

            <Text mt={10}>
              Platform Revenue: ₹12,40,000
            </Text>

            <Text mt={10}>
              Access Level: Full Access
            </Text>
          </Grid.Col>
        </Grid>
      </Card>
    </AppLayout>
  );
}

export default AdminProfile;