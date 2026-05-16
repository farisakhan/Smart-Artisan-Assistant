import {
  Card,
  Grid,
  Image,
  Text,
  Title,
  Badge,
} from "@mantine/core";

import { useEffect, useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

function ProductGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const entries =
      JSON.parse(localStorage.getItem("entries")) ||
      [];

    setProducts(entries);
  }, []);

  return (
    <AppLayout>
      <Title order={2} mb={20}>
        Product Gallery
      </Title>

      <Grid>
        {products.map((item) => (
          <Grid.Col
            key={item.id}
            span={{ base: 12, md: 4 }}
          >
            <Card shadow="sm" radius="lg">
              <Card.Section>
                <Image
                  src={
                    item.image ||
                    "https://images.unsplash.com/photo-1517705008128-361805f42e86"
                  }
                  height={220}
                />
              </Card.Section>

              <Title order={4} mt={15}>
                {item.product}
              </Title>

              <Text mt={8}>
                Quantity: {item.quantity}
              </Text>

              <Text mt={5}>
                Profit: ₹{item.profit}
              </Text>

              <Badge
                color="green"
                mt={10}
              >
                Best Selling
              </Badge>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </AppLayout>
  );
}

export default ProductGallery;