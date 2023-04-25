import { defineConfig } from "@playwright/test";

export default defineConfig({
  // reporter: [["html", { open: "never" }]],
  reporter: "line",
  use: {
    baseURL: process.env.BASE_URL,
  },
});
