import {
  Button,
  Card,
  PasswordInput,
  Select,
  TextInput,
  Title,
  Notification,
  Stack,
} from "@mantine/core";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("artisan");

  const [error, setError] =
    useState("");

  const handleLogin = () => {
    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !role
    ) {
      setError(
        "Please fill all required fields"
      );

      return;
    }

    const userData = {
      name,
      email,
      role,
      token: "sample-token",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    if (role === "artisan") {
      navigate("/artisan/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #dbeafe, #eef2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Card
        shadow="xl"
        radius="lg"
        padding="xl"
        w={420}
        style={{
          border: "1px solid #e5e7eb",
        }}
      >
        <Title
          order={2}
          ta="center"
          mb={5}
        >
          Artisan Hub
        </Title>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: 25,
          }}
        >
          Login to continue
        </p>

        {error && (
          <Notification
            color="red"
            mb={20}
            onClose={() => setError("")}
          >
            {error}
          </Notification>
        )}

        <Stack>
          <TextInput
            label="Full Name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <TextInput
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <Select
            label="Login As"
            data={[
              {
                value: "artisan",
                label: "Artisan",
              },
              {
                value: "admin",
                label: "Admin",
              },
            ]}
            value={role}
            onChange={setRole}
            required
          />

          <Button
            fullWidth
            size="md"
            color="dark"
            mt={10}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default LoginPage;