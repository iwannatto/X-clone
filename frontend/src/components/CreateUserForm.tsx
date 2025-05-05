// src/components/CreateUserForm.tsx
import React, { useState } from "react";
import { CreateUserDto } from "../../../shared/api-client";
import { useUserCreate } from "../api";

export const CreateUserForm: React.FC = () => {
  const [form, setForm] = useState<CreateUserDto>({ email: "", name: "" });
  const { createUser, result, loading } = useUserCreate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>

      {result?.success && (
        <p style={{ color: "green" }}>
          User created successfully
          {result.data.message ? `: ${result.data.message}` : ""}
        </p>
      )}
      {result && !result.success && (
        <p style={{ color: "red" }}>
          Error: {result.error.message} ({result.error.status ?? "unknown"})
        </p>
      )}
    </form>
  );
};
