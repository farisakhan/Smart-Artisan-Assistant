import { Card, Text, Title } from "@mantine/core";

function StatsCard({ title, value }) {
  return (
    <Card shadow="sm" radius="md" padding="lg">
      <Text c="dimmed" size="sm">
        {title}
      </Text>

      <Title order={2} mt={10}>
        {value}
      </Title>
    </Card>
  );
}

export default StatsCard;