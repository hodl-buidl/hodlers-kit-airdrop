import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  manifest: {
    name: "X Copilot",
    description: "A toolkit to streamline marketing on X",
    version: "1.0.0",
  },
  modules: ["@wxt-dev/module-react"],
});
