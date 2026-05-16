import {
  Button,
  Card,
  NumberInput,
  Select,
  TextInput,
  Title,
  Notification,
  Image,
  Group,
} from "@mantine/core";

import { Dropzone } from "@mantine/dropzone";

import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";

function AddEntryPage() {
  const [product, setProduct] =
    useState("");

  const [materialCost, setMaterialCost] =
    useState("");

  const [sellingPrice, setSellingPrice] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [status, setStatus] =
    useState("Preparing");

  const [image, setImage] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleImageUpload = (files) => {
    const file = files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    setError("");
    setSuccess("");

    if (
      !product ||
      !materialCost ||
      !sellingPrice ||
      !quantity
    ) {
      setError(
        "Please fill all fields"
      );

      return;
    }

    const profit =
      (sellingPrice - materialCost) *
      quantity;

    const newEntry = {
      id: Date.now(),
      product,
      materialCost,
      sellingPrice,
      quantity,
      status,
      image,
      profit,
      createdAt:
        new Date().toLocaleString(),
    };

    const oldEntries =
      JSON.parse(
        localStorage.getItem("entries")
      ) || [];

    const updatedEntries = [
      ...oldEntries,
      newEntry,
    ];

    localStorage.setItem(
      "entries",
      JSON.stringify(updatedEntries)
    );

    setSuccess(
      "Entry Added Successfully"
    );

    setProduct("");
    setMaterialCost("");
    setSellingPrice("");
    setQuantity("");
    setStatus("Preparing");
    setImage("");
  };

  return (
    <AppLayout>
      <Card
        shadow="sm"
        radius="lg"
        maw={700}
      >
        <Title order={3} mb={25}>
          Add Product Entry
        </Title>

        {error && (
          <Notification
            color="red"
            mb={20}
          >
            {error}
          </Notification>
        )}

        {success && (
          <Notification
            color="green"
            mb={20}
          >
            {success}
          </Notification>
        )}

        <TextInput
          label="Product Name"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
          mb={15}
        />

        <NumberInput
          label="Material Cost"
          value={materialCost}
          onChange={setMaterialCost}
          mb={15}
        />

        <NumberInput
          label="Selling Price"
          value={sellingPrice}
          onChange={setSellingPrice}
          mb={15}
        />

        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={setQuantity}
          mb={15}
        />

        <Select
          label="Status"
          data={[
            "Preparing",
            "Ready",
            "Delivered",
          ]}
          value={status}
          onChange={setStatus}
          mb={20}
        />

        <Dropzone
          onDrop={handleImageUpload}
          accept={[
            "image/png",
            "image/jpeg",
          ]}
          mb={20}
        >
          <Group
            justify="center"
            style={{
              minHeight: 120,
            }}
          >
            Upload Product Image
          </Group>
        </Dropzone>

        {image && (
          <Image
            src={image}
            h={220}
            radius="md"
            mb={20}
          />
        )}

        <Button
          fullWidth
          color="dark"
          onClick={handleSubmit}
        >
          Add Entry
        </Button>
      </Card>
    </AppLayout>
  );
}

export default AddEntryPage;